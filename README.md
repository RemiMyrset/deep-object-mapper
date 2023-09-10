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