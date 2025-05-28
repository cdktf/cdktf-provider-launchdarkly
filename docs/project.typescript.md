# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-launchdarkly.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-launchdarkly.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project launchdarkly_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.Project.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

new project.Project(scope: Construct, id: string, config: ProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig">ProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.project.ProjectConfig">ProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.putDefaultClientSideAvailability">putDefaultClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.putEnvironments">putEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetDefaultClientSideAvailability">resetDefaultClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetIncludeInSnippet">resetIncludeInSnippet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.project.Project.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.project.Project.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.project.Project.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.project.Project.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.project.Project.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.project.Project.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.project.Project.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.project.Project.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-launchdarkly.project.Project.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.project.Project.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.project.Project.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.project.Project.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.project.Project.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.project.Project.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.project.Project.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-launchdarkly.project.Project.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-launchdarkly.project.Project.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.project.Project.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.project.Project.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.project.Project.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-launchdarkly.project.Project.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.project.Project.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-launchdarkly.project.Project.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.project.Project.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-launchdarkly.project.Project.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.project.Project.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultClientSideAvailability` <a name="putDefaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.Project.putDefaultClientSideAvailability"></a>

```typescript
public putDefaultClientSideAvailability(value: IResolvable | ProjectDefaultClientSideAvailability[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.project.Project.putDefaultClientSideAvailability.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>[]

---

##### `putEnvironments` <a name="putEnvironments" id="@cdktf/provider-launchdarkly.project.Project.putEnvironments"></a>

```typescript
public putEnvironments(value: IResolvable | ProjectEnvironments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.project.Project.putEnvironments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>[]

---

##### `resetDefaultClientSideAvailability` <a name="resetDefaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.Project.resetDefaultClientSideAvailability"></a>

```typescript
public resetDefaultClientSideAvailability(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.project.Project.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeInSnippet` <a name="resetIncludeInSnippet" id="@cdktf/provider-launchdarkly.project.Project.resetIncludeInSnippet"></a>

```typescript
public resetIncludeInSnippet(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-launchdarkly.project.Project.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.project.Project.isConstruct"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

project.Project.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.project.Project.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.project.Project.isTerraformElement"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

project.Project.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-launchdarkly.project.Project.isTerraformResource"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

project.Project.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

project.Project.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Project to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.defaultClientSideAvailability">defaultClientSideAvailability</a></code> | <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList">ProjectDefaultClientSideAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.environments">environments</a></code> | <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList">ProjectEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.defaultClientSideAvailabilityInput">defaultClientSideAvailabilityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.environmentsInput">environmentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.includeInSnippetInput">includeInSnippetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.includeInSnippet">includeInSnippet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.project.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.project.Project.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.Project.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.project.Project.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.project.Project.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.project.Project.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.project.Project.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.project.Project.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.project.Project.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.project.Project.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.project.Project.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.project.Project.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.project.Project.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.project.Project.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultClientSideAvailability`<sup>Required</sup> <a name="defaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.Project.property.defaultClientSideAvailability"></a>

```typescript
public readonly defaultClientSideAvailability: ProjectDefaultClientSideAvailabilityList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList">ProjectDefaultClientSideAvailabilityList</a>

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktf/provider-launchdarkly.project.Project.property.environments"></a>

```typescript
public readonly environments: ProjectEnvironmentsList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList">ProjectEnvironmentsList</a>

---

##### `defaultClientSideAvailabilityInput`<sup>Optional</sup> <a name="defaultClientSideAvailabilityInput" id="@cdktf/provider-launchdarkly.project.Project.property.defaultClientSideAvailabilityInput"></a>

```typescript
public readonly defaultClientSideAvailabilityInput: IResolvable | ProjectDefaultClientSideAvailability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>[]

---

##### `environmentsInput`<sup>Optional</sup> <a name="environmentsInput" id="@cdktf/provider-launchdarkly.project.Project.property.environmentsInput"></a>

```typescript
public readonly environmentsInput: IResolvable | ProjectEnvironments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.project.Project.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeInSnippetInput`<sup>Optional</sup> <a name="includeInSnippetInput" id="@cdktf/provider-launchdarkly.project.Project.property.includeInSnippetInput"></a>

```typescript
public readonly includeInSnippetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.project.Project.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.project.Project.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-launchdarkly.project.Project.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.project.Project.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeInSnippet`<sup>Required</sup> <a name="includeInSnippet" id="@cdktf/provider-launchdarkly.project.Project.property.includeInSnippet"></a>

```typescript
public readonly includeInSnippet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.project.Project.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.project.Project.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.project.Project.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.project.Project.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-launchdarkly.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.project.ProjectConfig.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

const projectConfig: project.ProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.environments">environments</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>[]</code> | environments block. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.key">key</a></code> | <code>string</code> | The project's unique key. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.name">name</a></code> | <code>string</code> | The project's name. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.defaultClientSideAvailability">defaultClientSideAvailability</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>[]</code> | default_client_side_availability block. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#id Project#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.includeInSnippet">includeInSnippet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether feature flags created under the project should be available to client-side SDKs by default. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.tags">tags</a></code> | <code>string[]</code> | Tags associated with your resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.environments"></a>

```typescript
public readonly environments: IResolvable | ProjectEnvironments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>[]

environments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#environments Project#environments}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The project's unique key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#key Project#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The project's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#name Project#name}

---

##### `defaultClientSideAvailability`<sup>Optional</sup> <a name="defaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.defaultClientSideAvailability"></a>

```typescript
public readonly defaultClientSideAvailability: IResolvable | ProjectDefaultClientSideAvailability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>[]

default_client_side_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#default_client_side_availability Project#default_client_side_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#id Project#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeInSnippet`<sup>Optional</sup> <a name="includeInSnippet" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.includeInSnippet"></a>

```typescript
public readonly includeInSnippet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether feature flags created under the project should be available to client-side SDKs by default.

Please migrate to `default_client_side_availability` to maintain future compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#include_in_snippet Project#include_in_snippet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#tags Project#tags}

---

### ProjectDefaultClientSideAvailability <a name="ProjectDefaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

const projectDefaultClientSideAvailability: project.ProjectDefaultClientSideAvailability = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.property.usingEnvironmentId">usingEnvironmentId</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#using_environment_id Project#using_environment_id}. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.property.usingMobileKey">usingMobileKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#using_mobile_key Project#using_mobile_key}. |

---

##### `usingEnvironmentId`<sup>Required</sup> <a name="usingEnvironmentId" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.property.usingEnvironmentId"></a>

```typescript
public readonly usingEnvironmentId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#using_environment_id Project#using_environment_id}.

---

##### `usingMobileKey`<sup>Required</sup> <a name="usingMobileKey" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.property.usingMobileKey"></a>

```typescript
public readonly usingMobileKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#using_mobile_key Project#using_mobile_key}.

---

### ProjectEnvironments <a name="ProjectEnvironments" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

const projectEnvironments: project.ProjectEnvironments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.color">color</a></code> | <code>string</code> | The color swatch as an RGB hex value with no leading `#`. For example: `000000`. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.key">key</a></code> | <code>string</code> | The project-unique key for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.name">name</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.approvalSettings">approvalSettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>[]</code> | approval_settings block. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.confirmChanges">confirmChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` if this environment requires confirmation for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.critical">critical</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes whether the environment is critical. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.defaultTrackEvents">defaultTrackEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` to enable data export for every flag created in this environment after you configure this argument. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | The TTL for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.requireComments">requireComments</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` if this environment requires comments for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.secureMode">secureMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` to ensure a user of the client-side SDK cannot impersonate another user. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.tags">tags</a></code> | <code>string[]</code> | Tags associated with your resource. |

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

The color swatch as an RGB hex value with no leading `#`. For example: `000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#color Project#color}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The project-unique key for the environment.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#key Project#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#name Project#name}

---

##### `approvalSettings`<sup>Optional</sup> <a name="approvalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.approvalSettings"></a>

```typescript
public readonly approvalSettings: IResolvable | ProjectEnvironmentsApprovalSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>[]

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#approval_settings Project#approval_settings}

---

##### `confirmChanges`<sup>Optional</sup> <a name="confirmChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.confirmChanges"></a>

```typescript
public readonly confirmChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` if this environment requires confirmation for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#confirm_changes Project#confirm_changes}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.critical"></a>

```typescript
public readonly critical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes whether the environment is critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#critical Project#critical}

---

##### `defaultTrackEvents`<sup>Optional</sup> <a name="defaultTrackEvents" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.defaultTrackEvents"></a>

```typescript
public readonly defaultTrackEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` to enable data export for every flag created in this environment after you configure this argument.

This field will default to `false` when not set. To learn more, read [Data Export](https://docs.launchdarkly.com/home/data-export).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#default_track_events Project#default_track_events}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

The TTL for the environment.

This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK. This field will default to `0` when not set. To learn more, read [TTL settings](https://docs.launchdarkly.com/home/organize/environments#ttl-settings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#default_ttl Project#default_ttl}

---

##### `requireComments`<sup>Optional</sup> <a name="requireComments" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.requireComments"></a>

```typescript
public readonly requireComments: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` if this environment requires comments for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#require_comments Project#require_comments}

---

##### `secureMode`<sup>Optional</sup> <a name="secureMode" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.secureMode"></a>

```typescript
public readonly secureMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` to ensure a user of the client-side SDK cannot impersonate another user.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#secure_mode Project#secure_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#tags Project#tags}

---

### ProjectEnvironmentsApprovalSettings <a name="ProjectEnvironmentsApprovalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

const projectEnvironmentsApprovalSettings: project.ProjectEnvironmentsApprovalSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.autoApplyApprovedChanges">autoApplyApprovedChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | Automatically apply changes that have been approved by all reviewers. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.canApplyDeclinedChanges">canApplyDeclinedChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.canReviewOwnRequest">canReviewOwnRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.minNumApprovals">minNumApprovals</a></code> | <code>number</code> | The number of approvals required before an approval request can be applied. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` for changes to flags in this environment to require approval. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.requiredApprovalTags">requiredApprovalTags</a></code> | <code>string[]</code> | An array of tags used to specify which flags with those tags require approval. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.serviceConfig">serviceConfig</a></code> | <code>{[ key: string ]: string}</code> | The configuration for the service associated with this approval. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.serviceKind">serviceKind</a></code> | <code>string</code> | The kind of service associated with this approval. |

---

##### `autoApplyApprovedChanges`<sup>Optional</sup> <a name="autoApplyApprovedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.autoApplyApprovedChanges"></a>

```typescript
public readonly autoApplyApprovedChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Automatically apply changes that have been approved by all reviewers.

This field is only applicable for approval service kinds other than `launchdarkly`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#auto_apply_approved_changes Project#auto_apply_approved_changes}

---

##### `canApplyDeclinedChanges`<sup>Optional</sup> <a name="canApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.canApplyDeclinedChanges"></a>

```typescript
public readonly canApplyDeclinedChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request.

Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#can_apply_declined_changes Project#can_apply_declined_changes}

---

##### `canReviewOwnRequest`<sup>Optional</sup> <a name="canReviewOwnRequest" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.canReviewOwnRequest"></a>

```typescript
public readonly canReviewOwnRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#can_review_own_request Project#can_review_own_request}

---

##### `minNumApprovals`<sup>Optional</sup> <a name="minNumApprovals" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.minNumApprovals"></a>

```typescript
public readonly minNumApprovals: number;
```

- *Type:* number

The number of approvals required before an approval request can be applied.

This number must be between 1 and 5. Defaults to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#min_num_approvals Project#min_num_approvals}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` for changes to flags in this environment to require approval.

You may only set `required` to true if `required_approval_tags` is not set and vice versa. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#required Project#required}

---

##### `requiredApprovalTags`<sup>Optional</sup> <a name="requiredApprovalTags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.requiredApprovalTags"></a>

```typescript
public readonly requiredApprovalTags: string[];
```

- *Type:* string[]

An array of tags used to specify which flags with those tags require approval.

You may only set `required_approval_tags` if `required` is set to `false` and vice versa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#required_approval_tags Project#required_approval_tags}

---

##### `serviceConfig`<sup>Optional</sup> <a name="serviceConfig" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.serviceConfig"></a>

```typescript
public readonly serviceConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The configuration for the service associated with this approval.

This is specific to each approval service. For a `service_kind` of `servicenow`, the following fields apply:

	 - `template` (String) The sys_id of the Standard Change Request Template in ServiceNow that LaunchDarkly will use when creating the change request.
	 - `detail_column` (String) The name of the ServiceNow Change Request column LaunchDarkly uses to populate detailed approval request information. This is most commonly "justification".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#service_config Project#service_config}

---

##### `serviceKind`<sup>Optional</sup> <a name="serviceKind" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.serviceKind"></a>

```typescript
public readonly serviceKind: string;
```

- *Type:* string

The kind of service associated with this approval.

This determines which platform is used for requesting approval. Valid values are `servicenow`, `launchdarkly`. If you use a value other than `launchdarkly`, you must have already configured the integration in the LaunchDarkly UI or your apply will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/project#service_kind Project#service_kind}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectDefaultClientSideAvailabilityList <a name="ProjectDefaultClientSideAvailabilityList" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

new project.ProjectDefaultClientSideAvailabilityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.get"></a>

```typescript
public get(index: number): ProjectDefaultClientSideAvailabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectDefaultClientSideAvailability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>[]

---


### ProjectDefaultClientSideAvailabilityOutputReference <a name="ProjectDefaultClientSideAvailabilityOutputReference" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

new project.ProjectDefaultClientSideAvailabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput">usingEnvironmentIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKeyInput">usingMobileKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentId">usingEnvironmentId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKey">usingMobileKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usingEnvironmentIdInput`<sup>Optional</sup> <a name="usingEnvironmentIdInput" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput"></a>

```typescript
public readonly usingEnvironmentIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usingMobileKeyInput`<sup>Optional</sup> <a name="usingMobileKeyInput" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKeyInput"></a>

```typescript
public readonly usingMobileKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usingEnvironmentId`<sup>Required</sup> <a name="usingEnvironmentId" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentId"></a>

```typescript
public readonly usingEnvironmentId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usingMobileKey`<sup>Required</sup> <a name="usingMobileKey" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKey"></a>

```typescript
public readonly usingMobileKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectDefaultClientSideAvailability;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>

---


### ProjectEnvironmentsApprovalSettingsList <a name="ProjectEnvironmentsApprovalSettingsList" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

new project.ProjectEnvironmentsApprovalSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.get"></a>

```typescript
public get(index: number): ProjectEnvironmentsApprovalSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectEnvironmentsApprovalSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>[]

---


### ProjectEnvironmentsApprovalSettingsOutputReference <a name="ProjectEnvironmentsApprovalSettingsOutputReference" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

new project.ProjectEnvironmentsApprovalSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetAutoApplyApprovedChanges">resetAutoApplyApprovedChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetCanApplyDeclinedChanges">resetCanApplyDeclinedChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetCanReviewOwnRequest">resetCanReviewOwnRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetMinNumApprovals">resetMinNumApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetRequiredApprovalTags">resetRequiredApprovalTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetServiceConfig">resetServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetServiceKind">resetServiceKind</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoApplyApprovedChanges` <a name="resetAutoApplyApprovedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetAutoApplyApprovedChanges"></a>

```typescript
public resetAutoApplyApprovedChanges(): void
```

##### `resetCanApplyDeclinedChanges` <a name="resetCanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetCanApplyDeclinedChanges"></a>

```typescript
public resetCanApplyDeclinedChanges(): void
```

##### `resetCanReviewOwnRequest` <a name="resetCanReviewOwnRequest" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetCanReviewOwnRequest"></a>

```typescript
public resetCanReviewOwnRequest(): void
```

##### `resetMinNumApprovals` <a name="resetMinNumApprovals" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetMinNumApprovals"></a>

```typescript
public resetMinNumApprovals(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetRequiredApprovalTags` <a name="resetRequiredApprovalTags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetRequiredApprovalTags"></a>

```typescript
public resetRequiredApprovalTags(): void
```

##### `resetServiceConfig` <a name="resetServiceConfig" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetServiceConfig"></a>

```typescript
public resetServiceConfig(): void
```

##### `resetServiceKind` <a name="resetServiceKind" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetServiceKind"></a>

```typescript
public resetServiceKind(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.autoApplyApprovedChangesInput">autoApplyApprovedChangesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput">canApplyDeclinedChangesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canReviewOwnRequestInput">canReviewOwnRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.minNumApprovalsInput">minNumApprovalsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredApprovalTagsInput">requiredApprovalTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceConfigInput">serviceConfigInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceKindInput">serviceKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.autoApplyApprovedChanges">autoApplyApprovedChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canApplyDeclinedChanges">canApplyDeclinedChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canReviewOwnRequest">canReviewOwnRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.minNumApprovals">minNumApprovals</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredApprovalTags">requiredApprovalTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceConfig">serviceConfig</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceKind">serviceKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoApplyApprovedChangesInput`<sup>Optional</sup> <a name="autoApplyApprovedChangesInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.autoApplyApprovedChangesInput"></a>

```typescript
public readonly autoApplyApprovedChangesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canApplyDeclinedChangesInput`<sup>Optional</sup> <a name="canApplyDeclinedChangesInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput"></a>

```typescript
public readonly canApplyDeclinedChangesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canReviewOwnRequestInput`<sup>Optional</sup> <a name="canReviewOwnRequestInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canReviewOwnRequestInput"></a>

```typescript
public readonly canReviewOwnRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minNumApprovalsInput`<sup>Optional</sup> <a name="minNumApprovalsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.minNumApprovalsInput"></a>

```typescript
public readonly minNumApprovalsInput: number;
```

- *Type:* number

---

##### `requiredApprovalTagsInput`<sup>Optional</sup> <a name="requiredApprovalTagsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredApprovalTagsInput"></a>

```typescript
public readonly requiredApprovalTagsInput: string[];
```

- *Type:* string[]

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceConfigInput`<sup>Optional</sup> <a name="serviceConfigInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceConfigInput"></a>

```typescript
public readonly serviceConfigInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serviceKindInput`<sup>Optional</sup> <a name="serviceKindInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceKindInput"></a>

```typescript
public readonly serviceKindInput: string;
```

- *Type:* string

---

##### `autoApplyApprovedChanges`<sup>Required</sup> <a name="autoApplyApprovedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.autoApplyApprovedChanges"></a>

```typescript
public readonly autoApplyApprovedChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canApplyDeclinedChanges`<sup>Required</sup> <a name="canApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canApplyDeclinedChanges"></a>

```typescript
public readonly canApplyDeclinedChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canReviewOwnRequest`<sup>Required</sup> <a name="canReviewOwnRequest" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canReviewOwnRequest"></a>

```typescript
public readonly canReviewOwnRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minNumApprovals`<sup>Required</sup> <a name="minNumApprovals" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.minNumApprovals"></a>

```typescript
public readonly minNumApprovals: number;
```

- *Type:* number

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredApprovalTags`<sup>Required</sup> <a name="requiredApprovalTags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredApprovalTags"></a>

```typescript
public readonly requiredApprovalTags: string[];
```

- *Type:* string[]

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceConfig"></a>

```typescript
public readonly serviceConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serviceKind`<sup>Required</sup> <a name="serviceKind" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceKind"></a>

```typescript
public readonly serviceKind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectEnvironmentsApprovalSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>

---


### ProjectEnvironmentsList <a name="ProjectEnvironmentsList" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

new project.ProjectEnvironmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.get"></a>

```typescript
public get(index: number): ProjectEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectEnvironments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>[]

---


### ProjectEnvironmentsOutputReference <a name="ProjectEnvironmentsOutputReference" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-launchdarkly'

new project.ProjectEnvironmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.putApprovalSettings">putApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetApprovalSettings">resetApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetConfirmChanges">resetConfirmChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetCritical">resetCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetDefaultTrackEvents">resetDefaultTrackEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetRequireComments">resetRequireComments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetSecureMode">resetSecureMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApprovalSettings` <a name="putApprovalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.putApprovalSettings"></a>

```typescript
public putApprovalSettings(value: IResolvable | ProjectEnvironmentsApprovalSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.putApprovalSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>[]

---

##### `resetApprovalSettings` <a name="resetApprovalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetApprovalSettings"></a>

```typescript
public resetApprovalSettings(): void
```

##### `resetConfirmChanges` <a name="resetConfirmChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetConfirmChanges"></a>

```typescript
public resetConfirmChanges(): void
```

##### `resetCritical` <a name="resetCritical" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetCritical"></a>

```typescript
public resetCritical(): void
```

##### `resetDefaultTrackEvents` <a name="resetDefaultTrackEvents" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetDefaultTrackEvents"></a>

```typescript
public resetDefaultTrackEvents(): void
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetDefaultTtl"></a>

```typescript
public resetDefaultTtl(): void
```

##### `resetRequireComments` <a name="resetRequireComments" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetRequireComments"></a>

```typescript
public resetRequireComments(): void
```

##### `resetSecureMode` <a name="resetSecureMode" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetSecureMode"></a>

```typescript
public resetSecureMode(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.approvalSettings">approvalSettings</a></code> | <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList">ProjectEnvironmentsApprovalSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.clientSideId">clientSideId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.mobileKey">mobileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.approvalSettingsInput">approvalSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.colorInput">colorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.confirmChangesInput">confirmChangesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.criticalInput">criticalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTrackEventsInput">defaultTrackEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.requireCommentsInput">requireCommentsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.secureModeInput">secureModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.color">color</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.confirmChanges">confirmChanges</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.critical">critical</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTrackEvents">defaultTrackEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.requireComments">requireComments</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.secureMode">secureMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `approvalSettings`<sup>Required</sup> <a name="approvalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.approvalSettings"></a>

```typescript
public readonly approvalSettings: ProjectEnvironmentsApprovalSettingsList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList">ProjectEnvironmentsApprovalSettingsList</a>

---

##### `clientSideId`<sup>Required</sup> <a name="clientSideId" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.clientSideId"></a>

```typescript
public readonly clientSideId: string;
```

- *Type:* string

---

##### `mobileKey`<sup>Required</sup> <a name="mobileKey" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.mobileKey"></a>

```typescript
public readonly mobileKey: string;
```

- *Type:* string

---

##### `approvalSettingsInput`<sup>Optional</sup> <a name="approvalSettingsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.approvalSettingsInput"></a>

```typescript
public readonly approvalSettingsInput: IResolvable | ProjectEnvironmentsApprovalSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>[]

---

##### `colorInput`<sup>Optional</sup> <a name="colorInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.colorInput"></a>

```typescript
public readonly colorInput: string;
```

- *Type:* string

---

##### `confirmChangesInput`<sup>Optional</sup> <a name="confirmChangesInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.confirmChangesInput"></a>

```typescript
public readonly confirmChangesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.criticalInput"></a>

```typescript
public readonly criticalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultTrackEventsInput`<sup>Optional</sup> <a name="defaultTrackEventsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTrackEventsInput"></a>

```typescript
public readonly defaultTrackEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: number;
```

- *Type:* number

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requireCommentsInput`<sup>Optional</sup> <a name="requireCommentsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.requireCommentsInput"></a>

```typescript
public readonly requireCommentsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secureModeInput`<sup>Optional</sup> <a name="secureModeInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.secureModeInput"></a>

```typescript
public readonly secureModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

---

##### `confirmChanges`<sup>Required</sup> <a name="confirmChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.confirmChanges"></a>

```typescript
public readonly confirmChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.critical"></a>

```typescript
public readonly critical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultTrackEvents`<sup>Required</sup> <a name="defaultTrackEvents" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTrackEvents"></a>

```typescript
public readonly defaultTrackEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requireComments`<sup>Required</sup> <a name="requireComments" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.requireComments"></a>

```typescript
public readonly requireComments: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secureMode`<sup>Required</sup> <a name="secureMode" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.secureMode"></a>

```typescript
public readonly secureMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectEnvironments;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>

---



