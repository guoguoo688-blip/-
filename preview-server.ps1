$root = Join-Path $PSScriptRoot "dist"
$listener = [System.Net.Sockets.TcpListener]::new(
  [System.Net.IPAddress]::Loopback,
  4173
)
$listener.Start()

$mimeTypes = @{
  ".css" = "text/css; charset=utf-8"
  ".html" = "text/html; charset=utf-8"
  ".ico" = "image/x-icon"
  ".jpeg" = "image/jpeg"
  ".jpg" = "image/jpeg"
  ".js" = "text/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".mp4" = "video/mp4"
  ".png" = "image/png"
  ".svg" = "image/svg+xml"
  ".webp" = "image/webp"
  ".woff" = "font/woff"
  ".woff2" = "font/woff2"
}

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $reader = [System.IO.StreamReader]::new(
        $stream,
        [Text.Encoding]::ASCII,
        $false,
        1024,
        $true
      )
      $requestLine = $reader.ReadLine()
      while ($reader.ReadLine()) {}

      $requestTarget = ($requestLine -split " ")[1]
      $requestPath = ([Uri]::new("http://127.0.0.1$requestTarget")).AbsolutePath
      $relativePath = [Uri]::UnescapeDataString($requestPath.TrimStart("/"))
      if ([string]::IsNullOrWhiteSpace($relativePath)) {
        $relativePath = "index.html"
      }

      $candidate = [System.IO.Path]::GetFullPath((Join-Path $root $relativePath))
      if (
        -not $candidate.StartsWith(
          [System.IO.Path]::GetFullPath($root),
          [StringComparison]::OrdinalIgnoreCase
        )
      ) {
        $bytes = [Text.Encoding]::UTF8.GetBytes("Forbidden")
        $header = "HTTP/1.1 403 Forbidden`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
      } else {
        if (-not (Test-Path -LiteralPath $candidate -PathType Leaf)) {
          $candidate = Join-Path $root "index.html"
        }

        $bytes = [System.IO.File]::ReadAllBytes($candidate)
        $extension = [System.IO.Path]::GetExtension($candidate).ToLowerInvariant()
        $contentType = if ($mimeTypes.ContainsKey($extension)) {
          $mimeTypes[$extension]
        } else {
          "application/octet-stream"
        }
        $header = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($bytes.Length)`r`nCache-Control: no-store`r`nConnection: close`r`n`r`n"
      }

      $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
      $stream.Write($headerBytes, 0, $headerBytes.Length)
      $stream.Write($bytes, 0, $bytes.Length)
      $stream.Flush()
    }
    finally {
      $client.Close()
    }
  }
}
finally {
  $listener.Stop()
}
