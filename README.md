# purescript-neodoc-parsing

> Parsing library written for neodoc, extracted from the sources.

Here's the central parser type:

```
global, "mutable" state (yikes)
                    \      input type
                     \     /
:: Parser e   c   s   g   i   a  -- output type
         /    |    \
custom error  |    "mutable" state
    read only config
```

## Features

* Perfomance - as little internal currying as required, specialized functions
  and not a monad transformer (re-implements `Reader` and `State` like
  capabilities)
* Custom error type `e`
* Custom read only "configuration" type `c`
* Custom "mutable" state `s`
* Out-of-the-norm "global" state `g` that does not obey `<|>`. Not very
  composable and probably evil. Neodoc does not use this (anymore), so this may
  be removed.
* Custom input type `i`

## TODO

* Add examples
* Add tests... this may never happen as this project is indirectly verified by
  neodoc's large test suite, but contributions are certainly welcome.
* Remove `g`

## Contributions

Contributions and feedback are welcome, but I expect this library to fly low
on the radar and I won't be actively developing it, but if pull requests or
issues fly in I am sure to take a look and respond!
