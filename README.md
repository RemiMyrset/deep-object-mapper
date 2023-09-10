![npm](https://img.shields.io/npm/v/deep-object-mapper)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/RemiMyrset/deep-object-mapper/build.yml)
![NPM](https://img.shields.io/npm/l/deep-object-mapper)
![npm type definitions](https://img.shields.io/npm/types/deep-object-mapper)


# Deep Object Mapper

Map different bits from an object to another

Usage:

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