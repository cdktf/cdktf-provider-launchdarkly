# `accessToken` Submodule <a name="`accessToken` Submodule" id="@cdktf/provider-launchdarkly.accessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessToken <a name="AccessToken" id="@cdktf/provider-launchdarkly.accessToken.AccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token launchdarkly_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer"></a>

```typescript
import { accessToken } from '@cdktf/provider-launchdarkly'

new accessToken.AccessToken(scope: Construct, id: string, config?: AccessTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig">AccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig">AccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.putInlineRoles">putInlineRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.putPolicyStatements">putPolicyStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetCustomRoles">resetCustomRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetDefaultApiVersion">resetDefaultApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetExpire">resetExpire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetInlineRoles">resetInlineRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetPolicyStatements">resetPolicyStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetServiceToken">resetServiceToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInlineRoles` <a name="putInlineRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.putInlineRoles"></a>

```typescript
public putInlineRoles(value: IResolvable | AccessTokenInlineRoles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.putInlineRoles.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>[]

---

##### `putPolicyStatements` <a name="putPolicyStatements" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.putPolicyStatements"></a>

```typescript
public putPolicyStatements(value: IResolvable | AccessTokenPolicyStatements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.putPolicyStatements.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>[]

---

##### `resetCustomRoles` <a name="resetCustomRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetCustomRoles"></a>

```typescript
public resetCustomRoles(): void
```

##### `resetDefaultApiVersion` <a name="resetDefaultApiVersion" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetDefaultApiVersion"></a>

```typescript
public resetDefaultApiVersion(): void
```

##### `resetExpire` <a name="resetExpire" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetExpire"></a>

```typescript
public resetExpire(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInlineRoles` <a name="resetInlineRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetInlineRoles"></a>

```typescript
public resetInlineRoles(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPolicyStatements` <a name="resetPolicyStatements" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetPolicyStatements"></a>

```typescript
public resetPolicyStatements(): void
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetServiceToken` <a name="resetServiceToken" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetServiceToken"></a>

```typescript
public resetServiceToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isConstruct"></a>

```typescript
import { accessToken } from '@cdktf/provider-launchdarkly'

accessToken.AccessToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformElement"></a>

```typescript
import { accessToken } from '@cdktf/provider-launchdarkly'

accessToken.AccessToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformResource"></a>

```typescript
import { accessToken } from '@cdktf/provider-launchdarkly'

accessToken.AccessToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport"></a>

```typescript
import { accessToken } from '@cdktf/provider-launchdarkly'

accessToken.AccessToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.inlineRoles">inlineRoles</a></code> | <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList">AccessTokenInlineRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.policyStatements">policyStatements</a></code> | <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList">AccessTokenPolicyStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.customRolesInput">customRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.defaultApiVersionInput">defaultApiVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.expireInput">expireInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.inlineRolesInput">inlineRolesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.policyStatementsInput">policyStatementsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.serviceTokenInput">serviceTokenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.customRoles">customRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.defaultApiVersion">defaultApiVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.expire">expire</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.serviceToken">serviceToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `inlineRoles`<sup>Required</sup> <a name="inlineRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.inlineRoles"></a>

```typescript
public readonly inlineRoles: AccessTokenInlineRolesList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList">AccessTokenInlineRolesList</a>

---

##### `policyStatements`<sup>Required</sup> <a name="policyStatements" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.policyStatements"></a>

```typescript
public readonly policyStatements: AccessTokenPolicyStatementsList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList">AccessTokenPolicyStatementsList</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `customRolesInput`<sup>Optional</sup> <a name="customRolesInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.customRolesInput"></a>

```typescript
public readonly customRolesInput: string[];
```

- *Type:* string[]

---

##### `defaultApiVersionInput`<sup>Optional</sup> <a name="defaultApiVersionInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.defaultApiVersionInput"></a>

```typescript
public readonly defaultApiVersionInput: number;
```

- *Type:* number

---

##### `expireInput`<sup>Optional</sup> <a name="expireInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.expireInput"></a>

```typescript
public readonly expireInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inlineRolesInput`<sup>Optional</sup> <a name="inlineRolesInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.inlineRolesInput"></a>

```typescript
public readonly inlineRolesInput: IResolvable | AccessTokenInlineRoles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyStatementsInput`<sup>Optional</sup> <a name="policyStatementsInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.policyStatementsInput"></a>

```typescript
public readonly policyStatementsInput: IResolvable | AccessTokenPolicyStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `serviceTokenInput`<sup>Optional</sup> <a name="serviceTokenInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.serviceTokenInput"></a>

```typescript
public readonly serviceTokenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customRoles`<sup>Required</sup> <a name="customRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.customRoles"></a>

```typescript
public readonly customRoles: string[];
```

- *Type:* string[]

---

##### `defaultApiVersion`<sup>Required</sup> <a name="defaultApiVersion" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.defaultApiVersion"></a>

```typescript
public readonly defaultApiVersion: number;
```

- *Type:* number

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.expire"></a>

```typescript
public readonly expire: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.serviceToken"></a>

```typescript
public readonly serviceToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessTokenConfig <a name="AccessTokenConfig" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.Initializer"></a>

```typescript
import { accessToken } from '@cdktf/provider-launchdarkly'

const accessTokenConfig: accessToken.AccessTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.customRoles">customRoles</a></code> | <code>string[]</code> | A list of custom role IDs to use as access limits for the access token. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.defaultApiVersion">defaultApiVersion</a></code> | <code>number</code> | The default API version for this token. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.expire">expire</a></code> | <code>number</code> | An expiration time for the current token secret, expressed as a Unix epoch time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#id AccessToken#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.inlineRoles">inlineRoles</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>[]</code> | inline_roles block. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.name">name</a></code> | <code>string</code> | A human-friendly name for the access token. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.policyStatements">policyStatements</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>[]</code> | policy_statements block. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.role">role</a></code> | <code>string</code> | A built-in LaunchDarkly role. Can be `reader`, `writer`, or `admin`. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.serviceToken">serviceToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the token will be a [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens). A change in this field will force the destruction of the existing token and the creation of a new one. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customRoles`<sup>Optional</sup> <a name="customRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.customRoles"></a>

```typescript
public readonly customRoles: string[];
```

- *Type:* string[]

A list of custom role IDs to use as access limits for the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#custom_roles AccessToken#custom_roles}

---

##### `defaultApiVersion`<sup>Optional</sup> <a name="defaultApiVersion" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.defaultApiVersion"></a>

```typescript
public readonly defaultApiVersion: number;
```

- *Type:* number

The default API version for this token.

Defaults to the latest API version. A change in this field will force the destruction of the existing token in state and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#default_api_version AccessToken#default_api_version}

---

##### `expire`<sup>Optional</sup> <a name="expire" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.expire"></a>

```typescript
public readonly expire: number;
```

- *Type:* number

An expiration time for the current token secret, expressed as a Unix epoch time.

Replace the computed token secret with a new value. The expired secret will no longer be able to authorize usage of the LaunchDarkly API. This field argument is **deprecated**. Please update your config to remove `expire` to maintain compatibility with future versions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#expire AccessToken#expire}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#id AccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inlineRoles`<sup>Optional</sup> <a name="inlineRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.inlineRoles"></a>

```typescript
public readonly inlineRoles: IResolvable | AccessTokenInlineRoles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>[]

inline_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#inline_roles AccessToken#inline_roles}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-friendly name for the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#name AccessToken#name}

---

##### `policyStatements`<sup>Optional</sup> <a name="policyStatements" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.policyStatements"></a>

```typescript
public readonly policyStatements: IResolvable | AccessTokenPolicyStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>[]

policy_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#policy_statements AccessToken#policy_statements}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

A built-in LaunchDarkly role. Can be `reader`, `writer`, or `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#role AccessToken#role}

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.serviceToken"></a>

```typescript
public readonly serviceToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the token will be a [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens). A change in this field will force the destruction of the existing token and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#service_token AccessToken#service_token}

---

### AccessTokenInlineRoles <a name="AccessTokenInlineRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.Initializer"></a>

```typescript
import { accessToken } from '@cdktf/provider-launchdarkly'

const accessTokenInlineRoles: accessToken.AccessTokenInlineRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.effect">effect</a></code> | <code>string</code> | Either `allow` or `deny`. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.actions">actions</a></code> | <code>string[]</code> | The list of action specifiers defining the actions to which the statement applies. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.notActions">notActions</a></code> | <code>string[]</code> | The list of action specifiers defining the actions to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.notResources">notResources</a></code> | <code>string[]</code> | The list of resource specifiers defining the resources to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.resources">resources</a></code> | <code>string[]</code> | The list of resource specifiers defining the resources to which the statement applies. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Either `allow` or `deny`.

This argument defines whether the statement allows or denies access to the named resources and actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#effect AccessToken#effect}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

The list of action specifiers defining the actions to which the statement applies.

Either `actions` or `not_actions` must be specified. For a list of available actions read [Actions reference](https://docs.launchdarkly.com/home/account-security/custom-roles/actions#actions-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#actions AccessToken#actions}

---

##### `notActions`<sup>Optional</sup> <a name="notActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.notActions"></a>

```typescript
public readonly notActions: string[];
```

- *Type:* string[]

The list of action specifiers defining the actions to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#not_actions AccessToken#not_actions}

---

##### `notResources`<sup>Optional</sup> <a name="notResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.notResources"></a>

```typescript
public readonly notResources: string[];
```

- *Type:* string[]

The list of resource specifiers defining the resources to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#not_resources AccessToken#not_resources}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

The list of resource specifiers defining the resources to which the statement applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#resources AccessToken#resources}

---

### AccessTokenPolicyStatements <a name="AccessTokenPolicyStatements" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.Initializer"></a>

```typescript
import { accessToken } from '@cdktf/provider-launchdarkly'

const accessTokenPolicyStatements: accessToken.AccessTokenPolicyStatements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.effect">effect</a></code> | <code>string</code> | Either `allow` or `deny`. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.actions">actions</a></code> | <code>string[]</code> | The list of action specifiers defining the actions to which the statement applies. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.notActions">notActions</a></code> | <code>string[]</code> | The list of action specifiers defining the actions to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.notResources">notResources</a></code> | <code>string[]</code> | The list of resource specifiers defining the resources to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.resources">resources</a></code> | <code>string[]</code> | The list of resource specifiers defining the resources to which the statement applies. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Either `allow` or `deny`.

This argument defines whether the statement allows or denies access to the named resources and actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#effect AccessToken#effect}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

The list of action specifiers defining the actions to which the statement applies.

Either `actions` or `not_actions` must be specified. For a list of available actions read [Actions reference](https://docs.launchdarkly.com/home/account-security/custom-roles/actions#actions-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#actions AccessToken#actions}

---

##### `notActions`<sup>Optional</sup> <a name="notActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.notActions"></a>

```typescript
public readonly notActions: string[];
```

- *Type:* string[]

The list of action specifiers defining the actions to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#not_actions AccessToken#not_actions}

---

##### `notResources`<sup>Optional</sup> <a name="notResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.notResources"></a>

```typescript
public readonly notResources: string[];
```

- *Type:* string[]

The list of resource specifiers defining the resources to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#not_resources AccessToken#not_resources}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

The list of resource specifiers defining the resources to which the statement applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/access_token#resources AccessToken#resources}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessTokenInlineRolesList <a name="AccessTokenInlineRolesList" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer"></a>

```typescript
import { accessToken } from '@cdktf/provider-launchdarkly'

new accessToken.AccessTokenInlineRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.get"></a>

```typescript
public get(index: number): AccessTokenInlineRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessTokenInlineRoles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>[]

---


### AccessTokenInlineRolesOutputReference <a name="AccessTokenInlineRolesOutputReference" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer"></a>

```typescript
import { accessToken } from '@cdktf/provider-launchdarkly'

new accessToken.AccessTokenInlineRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetNotActions">resetNotActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetNotResources">resetNotResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetNotActions` <a name="resetNotActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetNotActions"></a>

```typescript
public resetNotActions(): void
```

##### `resetNotResources` <a name="resetNotResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetNotResources"></a>

```typescript
public resetNotResources(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notActionsInput">notActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notResourcesInput">notResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notActions">notActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notResources">notResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `notActionsInput`<sup>Optional</sup> <a name="notActionsInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notActionsInput"></a>

```typescript
public readonly notActionsInput: string[];
```

- *Type:* string[]

---

##### `notResourcesInput`<sup>Optional</sup> <a name="notResourcesInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notResourcesInput"></a>

```typescript
public readonly notResourcesInput: string[];
```

- *Type:* string[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `notActions`<sup>Required</sup> <a name="notActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notActions"></a>

```typescript
public readonly notActions: string[];
```

- *Type:* string[]

---

##### `notResources`<sup>Required</sup> <a name="notResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notResources"></a>

```typescript
public readonly notResources: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessTokenInlineRoles;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>

---


### AccessTokenPolicyStatementsList <a name="AccessTokenPolicyStatementsList" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer"></a>

```typescript
import { accessToken } from '@cdktf/provider-launchdarkly'

new accessToken.AccessTokenPolicyStatementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.get"></a>

```typescript
public get(index: number): AccessTokenPolicyStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessTokenPolicyStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>[]

---


### AccessTokenPolicyStatementsOutputReference <a name="AccessTokenPolicyStatementsOutputReference" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer"></a>

```typescript
import { accessToken } from '@cdktf/provider-launchdarkly'

new accessToken.AccessTokenPolicyStatementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetNotActions">resetNotActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetNotResources">resetNotResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetNotActions` <a name="resetNotActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetNotActions"></a>

```typescript
public resetNotActions(): void
```

##### `resetNotResources` <a name="resetNotResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetNotResources"></a>

```typescript
public resetNotResources(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notActionsInput">notActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notResourcesInput">notResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notActions">notActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notResources">notResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `notActionsInput`<sup>Optional</sup> <a name="notActionsInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notActionsInput"></a>

```typescript
public readonly notActionsInput: string[];
```

- *Type:* string[]

---

##### `notResourcesInput`<sup>Optional</sup> <a name="notResourcesInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notResourcesInput"></a>

```typescript
public readonly notResourcesInput: string[];
```

- *Type:* string[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `notActions`<sup>Required</sup> <a name="notActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notActions"></a>

```typescript
public readonly notActions: string[];
```

- *Type:* string[]

---

##### `notResources`<sup>Required</sup> <a name="notResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notResources"></a>

```typescript
public readonly notResources: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessTokenPolicyStatements;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>

---



