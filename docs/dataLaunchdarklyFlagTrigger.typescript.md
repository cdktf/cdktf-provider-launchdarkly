# `dataLaunchdarklyFlagTrigger` Submodule <a name="`dataLaunchdarklyFlagTrigger` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyFlagTrigger <a name="DataLaunchdarklyFlagTrigger" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/flag_trigger launchdarkly_flag_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer"></a>

```typescript
import { dataLaunchdarklyFlagTrigger } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger(scope: Construct, id: string, config: DataLaunchdarklyFlagTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig">DataLaunchdarklyFlagTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig">DataLaunchdarklyFlagTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataLaunchdarklyFlagTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isConstruct"></a>

```typescript
import { dataLaunchdarklyFlagTrigger } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformElement"></a>

```typescript
import { dataLaunchdarklyFlagTrigger } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformDataSource"></a>

```typescript
import { dataLaunchdarklyFlagTrigger } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.generateConfigForImport"></a>

```typescript
import { dataLaunchdarklyFlagTrigger } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataLaunchdarklyFlagTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLaunchdarklyFlagTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLaunchdarklyFlagTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/flag_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataLaunchdarklyFlagTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.instructions">instructions</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList">DataLaunchdarklyFlagTriggerInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.integrationKey">integrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.maintainerId">maintainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.triggerUrl">triggerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.envKeyInput">envKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.flagKeyInput">flagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.projectKeyInput">projectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.envKey">envKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.flagKey">flagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.projectKey">projectKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.instructions"></a>

```typescript
public readonly instructions: DataLaunchdarklyFlagTriggerInstructionsList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList">DataLaunchdarklyFlagTriggerInstructionsList</a>

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

---

##### `maintainerId`<sup>Required</sup> <a name="maintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.maintainerId"></a>

```typescript
public readonly maintainerId: string;
```

- *Type:* string

---

##### `triggerUrl`<sup>Required</sup> <a name="triggerUrl" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.triggerUrl"></a>

```typescript
public readonly triggerUrl: string;
```

- *Type:* string

---

##### `envKeyInput`<sup>Optional</sup> <a name="envKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.envKeyInput"></a>

```typescript
public readonly envKeyInput: string;
```

- *Type:* string

---

##### `flagKeyInput`<sup>Optional</sup> <a name="flagKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.flagKeyInput"></a>

```typescript
public readonly flagKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.projectKeyInput"></a>

```typescript
public readonly projectKeyInput: string;
```

- *Type:* string

---

##### `envKey`<sup>Required</sup> <a name="envKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.envKey"></a>

```typescript
public readonly envKey: string;
```

- *Type:* string

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.flagKey"></a>

```typescript
public readonly flagKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyFlagTriggerConfig <a name="DataLaunchdarklyFlagTriggerConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.Initializer"></a>

```typescript
import { dataLaunchdarklyFlagTrigger } from '@cdktf/provider-launchdarkly'

const dataLaunchdarklyFlagTriggerConfig: dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.envKey">envKey</a></code> | <code>string</code> | The unique key of the environment the flag trigger will work in. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.flagKey">flagKey</a></code> | <code>string</code> | The unique key of the associated flag. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.id">id</a></code> | <code>string</code> | The Terraform trigger ID. The unique trigger ID can be found in your saved trigger URL:. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.projectKey">projectKey</a></code> | <code>string</code> | The unique key of the project encompassing the associated flag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `envKey`<sup>Required</sup> <a name="envKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.envKey"></a>

```typescript
public readonly envKey: string;
```

- *Type:* string

The unique key of the environment the flag trigger will work in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/flag_trigger#env_key DataLaunchdarklyFlagTrigger#env_key}

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.flagKey"></a>

```typescript
public readonly flagKey: string;
```

- *Type:* string

The unique key of the associated flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/flag_trigger#flag_key DataLaunchdarklyFlagTrigger#flag_key}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Terraform trigger ID. The unique trigger ID can be found in your saved trigger URL:.

```
https://app.launchdarkly.com/webhook/triggers/THIS_IS_YOUR_TRIGGER_ID/aff25a53-17d9-4112-a9b8-12718d1a2e79
```

Please note that if you did not save this upon creation of the resource, you will have to reset it to get a new value, which can cause breaking changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/flag_trigger#id DataLaunchdarklyFlagTrigger#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

The unique key of the project encompassing the associated flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/flag_trigger#project_key DataLaunchdarklyFlagTrigger#project_key}

---

### DataLaunchdarklyFlagTriggerInstructions <a name="DataLaunchdarklyFlagTriggerInstructions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructions.Initializer"></a>

```typescript
import { dataLaunchdarklyFlagTrigger } from '@cdktf/provider-launchdarkly'

const dataLaunchdarklyFlagTriggerInstructions: dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyFlagTriggerInstructionsList <a name="DataLaunchdarklyFlagTriggerInstructionsList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer"></a>

```typescript
import { dataLaunchdarklyFlagTrigger } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.get"></a>

```typescript
public get(index: number): DataLaunchdarklyFlagTriggerInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataLaunchdarklyFlagTriggerInstructionsOutputReference <a name="DataLaunchdarklyFlagTriggerInstructionsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer"></a>

```typescript
import { dataLaunchdarklyFlagTrigger } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructions">DataLaunchdarklyFlagTriggerInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLaunchdarklyFlagTriggerInstructions;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructions">DataLaunchdarklyFlagTriggerInstructions</a>

---



