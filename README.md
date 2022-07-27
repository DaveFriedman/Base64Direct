# Base64 Direct & Base64 Direct Go

### Base64 Direct

Base64 Direct is a utility that decodes base64 text to ASCII text. If the base64
text is encoded more than once, it will keep trying, up to 9 times.
The <code>Show!</code> button displays the step-by-step results of the decoding.
The <code>Go!</code> button <strong>sends your browser directly</strong> to the
decoded text.

### Base64 Direct Go
Base64 Direct Go is a utility that decodes base64 text to ASCII text, assumes
the ASCII text is a link, and sends your browser directly to that link.
Use this site by putting the base64 text at the end of this site's url.
For example: <code>https://www.google.com</code> in base64 is
<code>aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbQ==</code>.

If you put <code>aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbQ==</code> at the end of
this site's url (<code>https://davefriedman.github.io/base64direct/go/</code>),
you get <code><a
href="https://davefriedman.github.io/base64direct/go/aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbQ==">https://davefriedman.github.io/base64direct/go/aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbQ==</a></code>

This will take you to <code>https://www.google.com</code>.