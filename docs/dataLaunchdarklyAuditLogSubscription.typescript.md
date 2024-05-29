# `dataLaunchdarklyAuditLogSubscription` Submodule <a name="`dataLaunchdarklyAuditLogSubscription` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyAuditLogSubscription <a name="DataLaunchdarklyAuditLogSubscription" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/audit_log_subscription launchdarkly_audit_log_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer"></a>

```typescript
import { dataLaunchdarklyAuditLogSubscription } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription(scope: Construct, id: string, config: DataLaunchdarklyAuditLogSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig">DataLaunchdarklyAuditLogSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig">DataLaunchdarklyAuditLogSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataLaunchdarklyAuditLogSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isConstruct"></a>

```typescript
import { dataLaunchdarklyAuditLogSubscription } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformElement"></a>

```typescript
import { dataLaunchdarklyAuditLogSubscription } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformDataSource"></a>

```typescript
import { dataLaunchdarklyAuditLogSubscription } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.generateConfigForImport"></a>

```typescript
import { dataLaunchdarklyAuditLogSubscription } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataLaunchdarklyAuditLogSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLaunchdarklyAuditLogSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLaunchdarklyAuditLogSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/audit_log_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataLaunchdarklyAuditLogSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.config">config</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.on">on</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.statements">statements</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList">DataLaunchdarklyAuditLogSubscriptionStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.integrationKeyInput">integrationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.integrationKey">integrationKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.config"></a>

```typescript
public readonly config: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.on"></a>

```typescript
public readonly on: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `statements`<sup>Required</sup> <a name="statements" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.statements"></a>

```typescript
public readonly statements: DataLaunchdarklyAuditLogSubscriptionStatementsList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList">DataLaunchdarklyAuditLogSubscriptionStatementsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationKeyInput`<sup>Optional</sup> <a name="integrationKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.integrationKeyInput"></a>

```typescript
public readonly integrationKeyInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyAuditLogSubscriptionConfig <a name="DataLaunchdarklyAuditLogSubscriptionConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.Initializer"></a>

```typescript
import { dataLaunchdarklyAuditLogSubscription } from '@cdktf/provider-launchdarkly'

const dataLaunchdarklyAuditLogSubscriptionConfig: dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.id">id</a></code> | <code>string</code> | The audit log subscription ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.integrationKey">integrationKey</a></code> | <code>string</code> | The integration key. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The audit log subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/audit_log_subscription#id DataLaunchdarklyAuditLogSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

The integration key.

Supported integration keys are `chronosphere`, `cloudtrail`, `datadog`, `dynatrace`, `elastic`, `grafana`, `honeycomb`, `logdna`, `msteams`, `new-relic-apm`, `signalfx`, `slack`, and `splunk`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/audit_log_subscription#integration_key DataLaunchdarklyAuditLogSubscription#integration_key}

---

### DataLaunchdarklyAuditLogSubscriptionStatements <a name="DataLaunchdarklyAuditLogSubscriptionStatements" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements.Initializer"></a>

```typescript
import { dataLaunchdarklyAuditLogSubscription } from '@cdktf/provider-launchdarkly'

const dataLaunchdarklyAuditLogSubscriptionStatements: dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyAuditLogSubscriptionStatementsList <a name="DataLaunchdarklyAuditLogSubscriptionStatementsList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer"></a>

```typescript
import { dataLaunchdarklyAuditLogSubscription } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.get"></a>

```typescript
public get(index: number): DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference <a name="DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer"></a>

```typescript
import { dataLaunchdarklyAuditLogSubscription } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notActions">notActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notResources">notResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `notActions`<sup>Required</sup> <a name="notActions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notActions"></a>

```typescript
public readonly notActions: string[];
```

- *Type:* string[]

---

##### `notResources`<sup>Required</sup> <a name="notResources" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notResources"></a>

```typescript
public readonly notResources: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLaunchdarklyAuditLogSubscriptionStatements;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a>

---



