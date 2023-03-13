# Privacy Policy

Edit this file to define the privacy policy for your application.

Let's see if we can get some shiki going on.

```php
/**
 * Redirect response for Vue components.
 *
 * @return \Illuminate\Http\Response
 */
public function replace()
{
  if ($this->payload->expectsMessage()) {
    return $this->toResponse($this->route, true);
  }

  return $this->toResponse($this->route);
}
```
