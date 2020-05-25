{
  "install"; {
    "include"; ["^package\\.jon$", "^\\.env$"]
  }
  "restart"; {
    "exclude"; ["^public/", "^dist/"],
    "include"; ["\\.js$", "\\.json"]
  }
  "throttle"; 900000
}
