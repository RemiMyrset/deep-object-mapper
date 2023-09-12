<p align="center">
<a href="https://www.npmjs.com/package/deep-object-mapper"><img src="https://img.shields.io/npm/v/deep-object-mapper"></a>
<a href=""><img src="https://img.shields.io/github/actions/workflow/status/RemiMyrset/deep-object-mapper/build.yml"></a>
<a href='https://coveralls.io/github/RemiMyrset/deep-object-mapper?branch=master'><img src='https://coveralls.io/repos/github/RemiMyrset/deep-object-mapper/badge.svg?branch=master' alt='Coverage Status' /></a>
<a href="https://en.wikipedia.org/wiki/MIT_License"><img src="https://img.shields.io/npm/l/deep-object-mapper"></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/npm/types/deep-object-mapper" /></a>
</p>

# Deep Object Mapper

Map different bits from one object to another

Example usage:

```ts
const { 
  output,
} = deepMap<ElectricUpgradeKit, CombustionCar>({
  input,
  map: {
    "kit.engine": "engine",
    "kit.battery": "battery",
    "gizmo": "dashboard.gloveBox"
  },
})
```

🥓