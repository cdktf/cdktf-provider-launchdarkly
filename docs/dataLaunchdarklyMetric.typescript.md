# `data_launchdarkly_metric`

Refer to the Terraform Registory for docs: [`data_launchdarkly_metric`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric).

# `dataLaunchdarklyMetric` Submodule <a name="`dataLaunchdarklyMetric` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyMetric <a name="DataLaunchdarklyMetric" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric launchdarkly_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer"></a>

```typescript
import { dataLaunchdarklyMetric } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyMetric.DataLaunchdarklyMetric(scope: Construct, id: string, config: DataLaunchdarklyMetricConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig">DataLaunchdarklyMetricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig">DataLaunchdarklyMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.putUrls">putUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetEventKey">resetEventKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetIsActive">resetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetIsNumeric">resetIsNumeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetMaintainerId">resetMaintainerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetRandomizationUnits">resetRandomizationUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetSuccessCriteria">resetSuccessCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetUrls">resetUrls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putUrls` <a name="putUrls" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.putUrls"></a>

```typescript
public putUrls(value: IResolvable | DataLaunchdarklyMetricUrls[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.putUrls.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls">DataLaunchdarklyMetricUrls</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEventKey` <a name="resetEventKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetEventKey"></a>

```typescript
public resetEventKey(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsActive` <a name="resetIsActive" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetIsActive"></a>

```typescript
public resetIsActive(): void
```

##### `resetIsNumeric` <a name="resetIsNumeric" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetIsNumeric"></a>

```typescript
public resetIsNumeric(): void
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetMaintainerId` <a name="resetMaintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetMaintainerId"></a>

```typescript
public resetMaintainerId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRandomizationUnits` <a name="resetRandomizationUnits" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetRandomizationUnits"></a>

```typescript
public resetRandomizationUnits(): void
```

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetSelector"></a>

```typescript
public resetSelector(): void
```

##### `resetSuccessCriteria` <a name="resetSuccessCriteria" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetSuccessCriteria"></a>

```typescript
public resetSuccessCriteria(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetUnit"></a>

```typescript
public resetUnit(): void
```

##### `resetUrls` <a name="resetUrls" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetUrls"></a>

```typescript
public resetUrls(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataLaunchdarklyMetric resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isConstruct"></a>

```typescript
import { dataLaunchdarklyMetric } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyMetric.DataLaunchdarklyMetric.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformElement"></a>

```typescript
import { dataLaunchdarklyMetric } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformDataSource"></a>

```typescript
import { dataLaunchdarklyMetric } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.generateConfigForImport"></a>

```typescript
import { dataLaunchdarklyMetric } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyMetric.DataLaunchdarklyMetric.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataLaunchdarklyMetric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLaunchdarklyMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLaunchdarklyMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataLaunchdarklyMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.urls">urls</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList">DataLaunchdarklyMetricUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.eventKeyInput">eventKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isActiveInput">isActiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isNumericInput">isNumericInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.maintainerIdInput">maintainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.projectKeyInput">projectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.randomizationUnitsInput">randomizationUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.successCriteriaInput">successCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.urlsInput">urlsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls">DataLaunchdarklyMetricUrls</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.eventKey">eventKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isActive">isActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isNumeric">isNumeric</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.maintainerId">maintainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.projectKey">projectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.randomizationUnits">randomizationUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.successCriteria">successCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.unit">unit</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.urls"></a>

```typescript
public readonly urls: DataLaunchdarklyMetricUrlsList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList">DataLaunchdarklyMetricUrlsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `eventKeyInput`<sup>Optional</sup> <a name="eventKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.eventKeyInput"></a>

```typescript
public readonly eventKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isActiveInput"></a>

```typescript
public readonly isActiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isNumericInput`<sup>Optional</sup> <a name="isNumericInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isNumericInput"></a>

```typescript
public readonly isNumericInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `maintainerIdInput`<sup>Optional</sup> <a name="maintainerIdInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.maintainerIdInput"></a>

```typescript
public readonly maintainerIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.projectKeyInput"></a>

```typescript
public readonly projectKeyInput: string;
```

- *Type:* string

---

##### `randomizationUnitsInput`<sup>Optional</sup> <a name="randomizationUnitsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.randomizationUnitsInput"></a>

```typescript
public readonly randomizationUnitsInput: string[];
```

- *Type:* string[]

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `successCriteriaInput`<sup>Optional</sup> <a name="successCriteriaInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.successCriteriaInput"></a>

```typescript
public readonly successCriteriaInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `urlsInput`<sup>Optional</sup> <a name="urlsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.urlsInput"></a>

```typescript
public readonly urlsInput: IResolvable | DataLaunchdarklyMetricUrls[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls">DataLaunchdarklyMetricUrls</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `eventKey`<sup>Required</sup> <a name="eventKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.eventKey"></a>

```typescript
public readonly eventKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isNumeric`<sup>Required</sup> <a name="isNumeric" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isNumeric"></a>

```typescript
public readonly isNumeric: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `maintainerId`<sup>Required</sup> <a name="maintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.maintainerId"></a>

```typescript
public readonly maintainerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

---

##### `randomizationUnits`<sup>Required</sup> <a name="randomizationUnits" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.randomizationUnits"></a>

```typescript
public readonly randomizationUnits: string[];
```

- *Type:* string[]

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `successCriteria`<sup>Required</sup> <a name="successCriteria" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.successCriteria"></a>

```typescript
public readonly successCriteria: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyMetricConfig <a name="DataLaunchdarklyMetricConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.Initializer"></a>

```typescript
import { dataLaunchdarklyMetric } from '@cdktf/provider-launchdarkly'

const dataLaunchdarklyMetricConfig: dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.key">key</a></code> | <code>string</code> | A unique key that will be used to reference the metric in your code. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.projectKey">projectKey</a></code> | <code>string</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.description">description</a></code> | <code>string</code> | A short description of what the metric will be used for. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.eventKey">eventKey</a></code> | <code>string</code> | The event key for your metric (if custom metric). |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#id DataLaunchdarklyMetric#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.isActive">isActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the metric is active. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.isNumeric">isNumeric</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the metric is numeric. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.kind">kind</a></code> | <code>string</code> | The metric type -available choices are 'pageview', 'click', and 'custom'. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.maintainerId">maintainerId</a></code> | <code>string</code> | The LaunchDarkly ID of the user who will maintain the metric. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.name">name</a></code> | <code>string</code> | A human-readable name for your metric. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.randomizationUnits">randomizationUnits</a></code> | <code>string[]</code> | A set of one or more context kinds that this metric can measure events from. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.selector">selector</a></code> | <code>string</code> | The CSS selector for your metric (if click metric). |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.successCriteria">successCriteria</a></code> | <code>string</code> | The success criteria for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.unit">unit</a></code> | <code>string</code> | The unit for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.urls">urls</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls">DataLaunchdarklyMetricUrls</a>[]</code> | urls block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A unique key that will be used to reference the metric in your code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#key DataLaunchdarklyMetric#key}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#project_key DataLaunchdarklyMetric#project_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of what the metric will be used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#description DataLaunchdarklyMetric#description}

---

##### `eventKey`<sup>Optional</sup> <a name="eventKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.eventKey"></a>

```typescript
public readonly eventKey: string;
```

- *Type:* string

The event key for your metric (if custom metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#event_key DataLaunchdarklyMetric#event_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#id DataLaunchdarklyMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the metric is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#is_active DataLaunchdarklyMetric#is_active}

---

##### `isNumeric`<sup>Optional</sup> <a name="isNumeric" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.isNumeric"></a>

```typescript
public readonly isNumeric: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the metric is numeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#is_numeric DataLaunchdarklyMetric#is_numeric}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The metric type -available choices are 'pageview', 'click', and 'custom'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#kind DataLaunchdarklyMetric#kind}

---

##### `maintainerId`<sup>Optional</sup> <a name="maintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.maintainerId"></a>

```typescript
public readonly maintainerId: string;
```

- *Type:* string

The LaunchDarkly ID of the user who will maintain the metric.

If not set, the API will automatically apply the member associated with your Terraform API key or the most recently-set maintainer

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#maintainer_id DataLaunchdarklyMetric#maintainer_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-readable name for your metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#name DataLaunchdarklyMetric#name}

---

##### `randomizationUnits`<sup>Optional</sup> <a name="randomizationUnits" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.randomizationUnits"></a>

```typescript
public readonly randomizationUnits: string[];
```

- *Type:* string[]

A set of one or more context kinds that this metric can measure events from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#randomization_units DataLaunchdarklyMetric#randomization_units}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

The CSS selector for your metric (if click metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#selector DataLaunchdarklyMetric#selector}

---

##### `successCriteria`<sup>Optional</sup> <a name="successCriteria" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.successCriteria"></a>

```typescript
public readonly successCriteria: string;
```

- *Type:* string

The success criteria for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#success_criteria DataLaunchdarklyMetric#success_criteria}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The unit for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#unit DataLaunchdarklyMetric#unit}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.urls"></a>

```typescript
public readonly urls: IResolvable | DataLaunchdarklyMetricUrls[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls">DataLaunchdarklyMetricUrls</a>[]

urls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#urls DataLaunchdarklyMetric#urls}

---

### DataLaunchdarklyMetricUrls <a name="DataLaunchdarklyMetricUrls" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.Initializer"></a>

```typescript
import { dataLaunchdarklyMetric } from '@cdktf/provider-launchdarkly'

const dataLaunchdarklyMetricUrls: dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.kind">kind</a></code> | <code>string</code> | The url type - available choices are 'exact', 'canonical', 'substring' and 'regex'. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.pattern">pattern</a></code> | <code>string</code> | The URL-matching regex. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.substring">substring</a></code> | <code>string</code> | The URL substring. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.url">url</a></code> | <code>string</code> | The exact or canonical URL. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The url type - available choices are 'exact', 'canonical', 'substring' and 'regex'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#kind DataLaunchdarklyMetric#kind}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The URL-matching regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#pattern DataLaunchdarklyMetric#pattern}

---

##### `substring`<sup>Optional</sup> <a name="substring" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.substring"></a>

```typescript
public readonly substring: string;
```

- *Type:* string

The URL substring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#substring DataLaunchdarklyMetric#substring}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The exact or canonical URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/data-sources/metric#url DataLaunchdarklyMetric#url}

---

## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyMetricUrlsList <a name="DataLaunchdarklyMetricUrlsList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer"></a>

```typescript
import { dataLaunchdarklyMetric } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.get"></a>

```typescript
public get(index: number): DataLaunchdarklyMetricUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls">DataLaunchdarklyMetricUrls</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLaunchdarklyMetricUrls[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls">DataLaunchdarklyMetricUrls</a>[]

---


### DataLaunchdarklyMetricUrlsOutputReference <a name="DataLaunchdarklyMetricUrlsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer"></a>

```typescript
import { dataLaunchdarklyMetric } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resetSubstring">resetSubstring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetSubstring` <a name="resetSubstring" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resetSubstring"></a>

```typescript
public resetSubstring(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.substringInput">substringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.substring">substring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls">DataLaunchdarklyMetricUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `substringInput`<sup>Optional</sup> <a name="substringInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.substringInput"></a>

```typescript
public readonly substringInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `substring`<sup>Required</sup> <a name="substring" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.substring"></a>

```typescript
public readonly substring: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLaunchdarklyMetricUrls;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls">DataLaunchdarklyMetricUrls</a>

---



