```php
/**
 * Create a new registered user.
 *
 * @param  \Illuminate\Http\Request  $request
 * @param  \Serenity\Contracts\CreatesNewUsers  $creator
 * @return \Serenity\Contracts\Register
 */
public function __invoke(Request $request, CreatesNewUsers $creator): Register
{
  event(new Registered($user = $creator->create($request->all())));

  $this->guard->login($user);

  return app(Register::class);
}
```
