# `dataLaunchdarklyTeamMembers` Submodule <a name="`dataLaunchdarklyTeamMembers` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyTeamMembers <a name="DataLaunchdarklyTeamMembers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team_members launchdarkly_team_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.Initializer"></a>

```typescript
import { dataLaunchdarklyTeamMembers } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers(scope: Construct, id: string, config: DataLaunchdarklyTeamMembersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig">DataLaunchdarklyTeamMembersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig">DataLaunchdarklyTeamMembersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.resetIgnoreMissing">resetIgnoreMissing</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreMissing` <a name="resetIgnoreMissing" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.resetIgnoreMissing"></a>

```typescript
public resetIgnoreMissing(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataLaunchdarklyTeamMembers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.isConstruct"></a>

```typescript
import { dataLaunchdarklyTeamMembers } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.isTerraformElement"></a>

```typescript
import { dataLaunchdarklyTeamMembers } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.isTerraformDataSource"></a>

```typescript
import { dataLaunchdarklyTeamMembers } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.generateConfigForImport"></a>

```typescript
import { dataLaunchdarklyTeamMembers } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataLaunchdarklyTeamMembers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLaunchdarklyTeamMembers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLaunchdarklyTeamMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team_members#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataLaunchdarklyTeamMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.teamMembers">teamMembers</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList">DataLaunchdarklyTeamMembersTeamMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.emailsInput">emailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.ignoreMissingInput">ignoreMissingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.emails">emails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.ignoreMissing">ignoreMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `teamMembers`<sup>Required</sup> <a name="teamMembers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.teamMembers"></a>

```typescript
public readonly teamMembers: DataLaunchdarklyTeamMembersTeamMembersList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList">DataLaunchdarklyTeamMembersTeamMembersList</a>

---

##### `emailsInput`<sup>Optional</sup> <a name="emailsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.emailsInput"></a>

```typescript
public readonly emailsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreMissingInput`<sup>Optional</sup> <a name="ignoreMissingInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.ignoreMissingInput"></a>

```typescript
public readonly ignoreMissingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.emails"></a>

```typescript
public readonly emails: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreMissing`<sup>Required</sup> <a name="ignoreMissing" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.ignoreMissing"></a>

```typescript
public readonly ignoreMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyTeamMembersConfig <a name="DataLaunchdarklyTeamMembersConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.Initializer"></a>

```typescript
import { dataLaunchdarklyTeamMembers } from '@cdktf/provider-launchdarkly'

const dataLaunchdarklyTeamMembersConfig: dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.emails">emails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team_members#emails DataLaunchdarklyTeamMembers#emails}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team_members#id DataLaunchdarklyTeamMembers#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.ignoreMissing">ignoreMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team_members#ignore_missing DataLaunchdarklyTeamMembers#ignore_missing}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.emails"></a>

```typescript
public readonly emails: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team_members#emails DataLaunchdarklyTeamMembers#emails}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team_members#id DataLaunchdarklyTeamMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreMissing`<sup>Optional</sup> <a name="ignoreMissing" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersConfig.property.ignoreMissing"></a>

```typescript
public readonly ignoreMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team_members#ignore_missing DataLaunchdarklyTeamMembers#ignore_missing}.

---

### DataLaunchdarklyTeamMembersTeamMembers <a name="DataLaunchdarklyTeamMembersTeamMembers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembers.Initializer"></a>

```typescript
import { dataLaunchdarklyTeamMembers } from '@cdktf/provider-launchdarkly'

const dataLaunchdarklyTeamMembersTeamMembers: dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyTeamMembersTeamMembersList <a name="DataLaunchdarklyTeamMembersTeamMembersList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.Initializer"></a>

```typescript
import { dataLaunchdarklyTeamMembers } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.get"></a>

```typescript
public get(index: number): DataLaunchdarklyTeamMembersTeamMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataLaunchdarklyTeamMembersTeamMembersOutputReference <a name="DataLaunchdarklyTeamMembersTeamMembersOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.Initializer"></a>

```typescript
import { dataLaunchdarklyTeamMembers } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.customRoles">customRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembers">DataLaunchdarklyTeamMembersTeamMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRoles`<sup>Required</sup> <a name="customRoles" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.customRoles"></a>

```typescript
public readonly customRoles: string[];
```

- *Type:* string[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLaunchdarklyTeamMembersTeamMembers;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeamMembers.DataLaunchdarklyTeamMembersTeamMembers">DataLaunchdarklyTeamMembersTeamMembers</a>

---



