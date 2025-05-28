# `auditLogSubscription` Submodule <a name="`auditLogSubscription` Submodule" id="@cdktf/provider-launchdarkly.auditLogSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditLogSubscription <a name="AuditLogSubscription" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription launchdarkly_audit_log_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer"></a>

```typescript
import { auditLogSubscription } from '@cdktf/provider-launchdarkly'

new auditLogSubscription.AuditLogSubscription(scope: Construct, id: string, config: AuditLogSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig">AuditLogSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig">AuditLogSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.putStatements">putStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStatements` <a name="putStatements" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.putStatements"></a>

```typescript
public putStatements(value: IResolvable | AuditLogSubscriptionStatements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.putStatements.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AuditLogSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isConstruct"></a>

```typescript
import { auditLogSubscription } from '@cdktf/provider-launchdarkly'

auditLogSubscription.AuditLogSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isTerraformElement"></a>

```typescript
import { auditLogSubscription } from '@cdktf/provider-launchdarkly'

auditLogSubscription.AuditLogSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isTerraformResource"></a>

```typescript
import { auditLogSubscription } from '@cdktf/provider-launchdarkly'

auditLogSubscription.AuditLogSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.generateConfigForImport"></a>

```typescript
import { auditLogSubscription } from '@cdktf/provider-launchdarkly'

auditLogSubscription.AuditLogSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AuditLogSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuditLogSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuditLogSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuditLogSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.statements">statements</a></code> | <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList">AuditLogSubscriptionStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.configInput">configInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.integrationKeyInput">integrationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.onInput">onInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.statementsInput">statementsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.config">config</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.integrationKey">integrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.on">on</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `statements`<sup>Required</sup> <a name="statements" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.statements"></a>

```typescript
public readonly statements: AuditLogSubscriptionStatementsList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList">AuditLogSubscriptionStatementsList</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.configInput"></a>

```typescript
public readonly configInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationKeyInput`<sup>Optional</sup> <a name="integrationKeyInput" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.integrationKeyInput"></a>

```typescript
public readonly integrationKeyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onInput`<sup>Optional</sup> <a name="onInput" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.onInput"></a>

```typescript
public readonly onInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statementsInput`<sup>Optional</sup> <a name="statementsInput" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.statementsInput"></a>

```typescript
public readonly statementsInput: IResolvable | AuditLogSubscriptionStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.config"></a>

```typescript
public readonly config: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.on"></a>

```typescript
public readonly on: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditLogSubscriptionConfig <a name="AuditLogSubscriptionConfig" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.Initializer"></a>

```typescript
import { auditLogSubscription } from '@cdktf/provider-launchdarkly'

const auditLogSubscriptionConfig: auditLogSubscription.AuditLogSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.config">config</a></code> | <code>{[ key: string ]: string}</code> | The set of configuration fields corresponding to the value defined for `integration_key`. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.integrationKey">integrationKey</a></code> | <code>string</code> | The integration key. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.name">name</a></code> | <code>string</code> | A human-friendly name for your audit log subscription viewable from within the LaunchDarkly Integrations page. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.on">on</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not you want your subscription enabled, i.e. to actively send events. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.statements">statements</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>[]</code> | statements block. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#id AuditLogSubscription#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.tags">tags</a></code> | <code>string[]</code> | Tags associated with your resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.config"></a>

```typescript
public readonly config: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The set of configuration fields corresponding to the value defined for `integration_key`.

Refer to the `formVariables` field in the corresponding `integrations/<integration_key>/manifest.json` file in [this repo](https://github.com/launchdarkly/integration-framework/tree/master/integrations) for a full list of fields for the integration you wish to configure. **IMPORTANT**: Please note that Terraform will only accept these in snake case, regardless of the case shown in the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#config AuditLogSubscription#config}

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

The integration key.

Supported integration keys are `chronosphere`, `cloudtrail`, `datadog`, `dynatrace`, `elastic`, `grafana`, `honeycomb`, `kosli`, `last9`, `logdna`, `msteams`, `new-relic-apm`, `pagerduty`, `signalfx`, `slack`, and `splunk`. A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#integration_key AuditLogSubscription#integration_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-friendly name for your audit log subscription viewable from within the LaunchDarkly Integrations page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#name AuditLogSubscription#name}

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.on"></a>

```typescript
public readonly on: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not you want your subscription enabled, i.e. to actively send events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#on AuditLogSubscription#on}

---

##### `statements`<sup>Required</sup> <a name="statements" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.statements"></a>

```typescript
public readonly statements: IResolvable | AuditLogSubscriptionStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>[]

statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#statements AuditLogSubscription#statements}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#id AuditLogSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#tags AuditLogSubscription#tags}

---

### AuditLogSubscriptionStatements <a name="AuditLogSubscriptionStatements" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.Initializer"></a>

```typescript
import { auditLogSubscription } from '@cdktf/provider-launchdarkly'

const auditLogSubscriptionStatements: auditLogSubscription.AuditLogSubscriptionStatements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.effect">effect</a></code> | <code>string</code> | Either `allow` or `deny`. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.actions">actions</a></code> | <code>string[]</code> | The list of action specifiers defining the actions to which the statement applies. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.notActions">notActions</a></code> | <code>string[]</code> | The list of action specifiers defining the actions to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.notResources">notResources</a></code> | <code>string[]</code> | The list of resource specifiers defining the resources to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.resources">resources</a></code> | <code>string[]</code> | The list of resource specifiers defining the resources to which the statement applies. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Either `allow` or `deny`.

This argument defines whether the statement allows or denies access to the named resources and actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#effect AuditLogSubscription#effect}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

The list of action specifiers defining the actions to which the statement applies.

Either `actions` or `not_actions` must be specified. For a list of available actions read [Actions reference](https://docs.launchdarkly.com/home/account-security/custom-roles/actions#actions-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#actions AuditLogSubscription#actions}

---

##### `notActions`<sup>Optional</sup> <a name="notActions" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.notActions"></a>

```typescript
public readonly notActions: string[];
```

- *Type:* string[]

The list of action specifiers defining the actions to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#not_actions AuditLogSubscription#not_actions}

---

##### `notResources`<sup>Optional</sup> <a name="notResources" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.notResources"></a>

```typescript
public readonly notResources: string[];
```

- *Type:* string[]

The list of resource specifiers defining the resources to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#not_resources AuditLogSubscription#not_resources}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

The list of resource specifiers defining the resources to which the statement applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.1/docs/resources/audit_log_subscription#resources AuditLogSubscription#resources}

---

## Classes <a name="Classes" id="Classes"></a>

### AuditLogSubscriptionStatementsList <a name="AuditLogSubscriptionStatementsList" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer"></a>

```typescript
import { auditLogSubscription } from '@cdktf/provider-launchdarkly'

new auditLogSubscription.AuditLogSubscriptionStatementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.get"></a>

```typescript
public get(index: number): AuditLogSubscriptionStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditLogSubscriptionStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>[]

---


### AuditLogSubscriptionStatementsOutputReference <a name="AuditLogSubscriptionStatementsOutputReference" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer"></a>

```typescript
import { auditLogSubscription } from '@cdktf/provider-launchdarkly'

new auditLogSubscription.AuditLogSubscriptionStatementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetNotActions">resetNotActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetNotResources">resetNotResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetNotActions` <a name="resetNotActions" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetNotActions"></a>

```typescript
public resetNotActions(): void
```

##### `resetNotResources` <a name="resetNotResources" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetNotResources"></a>

```typescript
public resetNotResources(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notActionsInput">notActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notResourcesInput">notResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notActions">notActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notResources">notResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `notActionsInput`<sup>Optional</sup> <a name="notActionsInput" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notActionsInput"></a>

```typescript
public readonly notActionsInput: string[];
```

- *Type:* string[]

---

##### `notResourcesInput`<sup>Optional</sup> <a name="notResourcesInput" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notResourcesInput"></a>

```typescript
public readonly notResourcesInput: string[];
```

- *Type:* string[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `notActions`<sup>Required</sup> <a name="notActions" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notActions"></a>

```typescript
public readonly notActions: string[];
```

- *Type:* string[]

---

##### `notResources`<sup>Required</sup> <a name="notResources" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notResources"></a>

```typescript
public readonly notResources: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditLogSubscriptionStatements;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>

---



