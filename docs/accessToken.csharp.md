# `accessToken` Submodule <a name="`accessToken` Submodule" id="@cdktf/provider-launchdarkly.accessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessToken <a name="AccessToken" id="@cdktf/provider-launchdarkly.accessToken.AccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token launchdarkly_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new AccessToken(Construct Scope, string Id, AccessTokenConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig">AccessTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig">AccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.putInlineRoles">PutInlineRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.putPolicyStatements">PutPolicyStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetCustomRoles">ResetCustomRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetDefaultApiVersion">ResetDefaultApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetExpire">ResetExpire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetInlineRoles">ResetInlineRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetPolicyStatements">ResetPolicyStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInlineRoles` <a name="PutInlineRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.putInlineRoles"></a>

```csharp
private void PutInlineRoles(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.putInlineRoles.parameter.value"></a>

- *Type:* object

---

##### `PutPolicyStatements` <a name="PutPolicyStatements" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.putPolicyStatements"></a>

```csharp
private void PutPolicyStatements(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.putPolicyStatements.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomRoles` <a name="ResetCustomRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetCustomRoles"></a>

```csharp
private void ResetCustomRoles()
```

##### `ResetDefaultApiVersion` <a name="ResetDefaultApiVersion" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetDefaultApiVersion"></a>

```csharp
private void ResetDefaultApiVersion()
```

##### `ResetExpire` <a name="ResetExpire" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetExpire"></a>

```csharp
private void ResetExpire()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInlineRoles` <a name="ResetInlineRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetInlineRoles"></a>

```csharp
private void ResetInlineRoles()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPolicyStatements` <a name="ResetPolicyStatements" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetPolicyStatements"></a>

```csharp
private void ResetPolicyStatements()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetServiceToken"></a>

```csharp
private void ResetServiceToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

AccessToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

AccessToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

AccessToken.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

AccessToken.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AccessToken resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessToken to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.inlineRoles">InlineRoles</a></code> | <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList">AccessTokenInlineRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.policyStatements">PolicyStatements</a></code> | <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList">AccessTokenPolicyStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.customRolesInput">CustomRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.defaultApiVersionInput">DefaultApiVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.expireInput">ExpireInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.inlineRolesInput">InlineRolesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.policyStatementsInput">PolicyStatementsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.customRoles">CustomRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.defaultApiVersion">DefaultApiVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.expire">Expire</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.serviceToken">ServiceToken</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `InlineRoles`<sup>Required</sup> <a name="InlineRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.inlineRoles"></a>

```csharp
public AccessTokenInlineRolesList InlineRoles { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList">AccessTokenInlineRolesList</a>

---

##### `PolicyStatements`<sup>Required</sup> <a name="PolicyStatements" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.policyStatements"></a>

```csharp
public AccessTokenPolicyStatementsList PolicyStatements { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList">AccessTokenPolicyStatementsList</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `CustomRolesInput`<sup>Optional</sup> <a name="CustomRolesInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.customRolesInput"></a>

```csharp
public string[] CustomRolesInput { get; }
```

- *Type:* string[]

---

##### `DefaultApiVersionInput`<sup>Optional</sup> <a name="DefaultApiVersionInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.defaultApiVersionInput"></a>

```csharp
public double DefaultApiVersionInput { get; }
```

- *Type:* double

---

##### `ExpireInput`<sup>Optional</sup> <a name="ExpireInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.expireInput"></a>

```csharp
public double ExpireInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InlineRolesInput`<sup>Optional</sup> <a name="InlineRolesInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.inlineRolesInput"></a>

```csharp
public object InlineRolesInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyStatementsInput`<sup>Optional</sup> <a name="PolicyStatementsInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.policyStatementsInput"></a>

```csharp
public object PolicyStatementsInput { get; }
```

- *Type:* object

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.serviceTokenInput"></a>

```csharp
public object ServiceTokenInput { get; }
```

- *Type:* object

---

##### `CustomRoles`<sup>Required</sup> <a name="CustomRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.customRoles"></a>

```csharp
public string[] CustomRoles { get; }
```

- *Type:* string[]

---

##### `DefaultApiVersion`<sup>Required</sup> <a name="DefaultApiVersion" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.defaultApiVersion"></a>

```csharp
public double DefaultApiVersion { get; }
```

- *Type:* double

---

##### `Expire`<sup>Required</sup> <a name="Expire" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.expire"></a>

```csharp
public double Expire { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.serviceToken"></a>

```csharp
public object ServiceToken { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessTokenConfig <a name="AccessTokenConfig" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new AccessTokenConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] CustomRoles = null,
    double DefaultApiVersion = null,
    double Expire = null,
    string Id = null,
    object InlineRoles = null,
    string Name = null,
    object PolicyStatements = null,
    string Role = null,
    object ServiceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.customRoles">CustomRoles</a></code> | <code>string[]</code> | A list of custom role IDs to use as access limits for the access token. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.defaultApiVersion">DefaultApiVersion</a></code> | <code>double</code> | The default API version for this token. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.expire">Expire</a></code> | <code>double</code> | An expiration time for the current token secret, expressed as a Unix epoch time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#id AccessToken#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.inlineRoles">InlineRoles</a></code> | <code>object</code> | inline_roles block. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.name">Name</a></code> | <code>string</code> | A human-friendly name for the access token. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.policyStatements">PolicyStatements</a></code> | <code>object</code> | policy_statements block. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.role">Role</a></code> | <code>string</code> | A built-in LaunchDarkly role. Can be `reader`, `writer`, or `admin`. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.serviceToken">ServiceToken</a></code> | <code>object</code> | Whether the token will be a [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens). A change in this field will force the destruction of the existing token and the creation of a new one. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomRoles`<sup>Optional</sup> <a name="CustomRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.customRoles"></a>

```csharp
public string[] CustomRoles { get; set; }
```

- *Type:* string[]

A list of custom role IDs to use as access limits for the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#custom_roles AccessToken#custom_roles}

---

##### `DefaultApiVersion`<sup>Optional</sup> <a name="DefaultApiVersion" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.defaultApiVersion"></a>

```csharp
public double DefaultApiVersion { get; set; }
```

- *Type:* double

The default API version for this token.

Defaults to the latest API version. A change in this field will force the destruction of the existing token in state and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#default_api_version AccessToken#default_api_version}

---

##### `Expire`<sup>Optional</sup> <a name="Expire" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.expire"></a>

```csharp
public double Expire { get; set; }
```

- *Type:* double

An expiration time for the current token secret, expressed as a Unix epoch time.

Replace the computed token secret with a new value. The expired secret will no longer be able to authorize usage of the LaunchDarkly API. This field argument is **deprecated**. Please update your config to remove `expire` to maintain compatibility with future versions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#expire AccessToken#expire}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#id AccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InlineRoles`<sup>Optional</sup> <a name="InlineRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.inlineRoles"></a>

```csharp
public object InlineRoles { get; set; }
```

- *Type:* object

inline_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#inline_roles AccessToken#inline_roles}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A human-friendly name for the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#name AccessToken#name}

---

##### `PolicyStatements`<sup>Optional</sup> <a name="PolicyStatements" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.policyStatements"></a>

```csharp
public object PolicyStatements { get; set; }
```

- *Type:* object

policy_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#policy_statements AccessToken#policy_statements}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

A built-in LaunchDarkly role. Can be `reader`, `writer`, or `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#role AccessToken#role}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.serviceToken"></a>

```csharp
public object ServiceToken { get; set; }
```

- *Type:* object

Whether the token will be a [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens). A change in this field will force the destruction of the existing token and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#service_token AccessToken#service_token}

---

### AccessTokenInlineRoles <a name="AccessTokenInlineRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new AccessTokenInlineRoles {
    string Effect,
    string[] Actions = null,
    string[] NotActions = null,
    string[] NotResources = null,
    string[] Resources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.effect">Effect</a></code> | <code>string</code> | Either `allow` or `deny`. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.actions">Actions</a></code> | <code>string[]</code> | The list of action specifiers defining the actions to which the statement applies. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.notActions">NotActions</a></code> | <code>string[]</code> | The list of action specifiers defining the actions to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.notResources">NotResources</a></code> | <code>string[]</code> | The list of resource specifiers defining the resources to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.resources">Resources</a></code> | <code>string[]</code> | The list of resource specifiers defining the resources to which the statement applies. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

Either `allow` or `deny`.

This argument defines whether the statement allows or denies access to the named resources and actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#effect AccessToken#effect}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

The list of action specifiers defining the actions to which the statement applies.

Either `actions` or `not_actions` must be specified. For a list of available actions read [Actions reference](https://docs.launchdarkly.com/home/account-security/custom-roles/actions#actions-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#actions AccessToken#actions}

---

##### `NotActions`<sup>Optional</sup> <a name="NotActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.notActions"></a>

```csharp
public string[] NotActions { get; set; }
```

- *Type:* string[]

The list of action specifiers defining the actions to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#not_actions AccessToken#not_actions}

---

##### `NotResources`<sup>Optional</sup> <a name="NotResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.notResources"></a>

```csharp
public string[] NotResources { get; set; }
```

- *Type:* string[]

The list of resource specifiers defining the resources to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#not_resources AccessToken#not_resources}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

The list of resource specifiers defining the resources to which the statement applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#resources AccessToken#resources}

---

### AccessTokenPolicyStatements <a name="AccessTokenPolicyStatements" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new AccessTokenPolicyStatements {
    string Effect,
    string[] Actions = null,
    string[] NotActions = null,
    string[] NotResources = null,
    string[] Resources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.effect">Effect</a></code> | <code>string</code> | Either `allow` or `deny`. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.actions">Actions</a></code> | <code>string[]</code> | The list of action specifiers defining the actions to which the statement applies. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.notActions">NotActions</a></code> | <code>string[]</code> | The list of action specifiers defining the actions to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.notResources">NotResources</a></code> | <code>string[]</code> | The list of resource specifiers defining the resources to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.resources">Resources</a></code> | <code>string[]</code> | The list of resource specifiers defining the resources to which the statement applies. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

Either `allow` or `deny`.

This argument defines whether the statement allows or denies access to the named resources and actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#effect AccessToken#effect}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

The list of action specifiers defining the actions to which the statement applies.

Either `actions` or `not_actions` must be specified. For a list of available actions read [Actions reference](https://docs.launchdarkly.com/home/account-security/custom-roles/actions#actions-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#actions AccessToken#actions}

---

##### `NotActions`<sup>Optional</sup> <a name="NotActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.notActions"></a>

```csharp
public string[] NotActions { get; set; }
```

- *Type:* string[]

The list of action specifiers defining the actions to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#not_actions AccessToken#not_actions}

---

##### `NotResources`<sup>Optional</sup> <a name="NotResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.notResources"></a>

```csharp
public string[] NotResources { get; set; }
```

- *Type:* string[]

The list of resource specifiers defining the resources to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#not_resources AccessToken#not_resources}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

The list of resource specifiers defining the resources to which the statement applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/access_token#resources AccessToken#resources}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessTokenInlineRolesList <a name="AccessTokenInlineRolesList" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new AccessTokenInlineRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.get"></a>

```csharp
private AccessTokenInlineRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessTokenInlineRolesOutputReference <a name="AccessTokenInlineRolesOutputReference" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new AccessTokenInlineRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetNotActions">ResetNotActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetNotResources">ResetNotResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetNotActions` <a name="ResetNotActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetNotActions"></a>

```csharp
private void ResetNotActions()
```

##### `ResetNotResources` <a name="ResetNotResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetNotResources"></a>

```csharp
private void ResetNotResources()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notActionsInput">NotActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notResourcesInput">NotResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notActions">NotActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notResources">NotResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `NotActionsInput`<sup>Optional</sup> <a name="NotActionsInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notActionsInput"></a>

```csharp
public string[] NotActionsInput { get; }
```

- *Type:* string[]

---

##### `NotResourcesInput`<sup>Optional</sup> <a name="NotResourcesInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notResourcesInput"></a>

```csharp
public string[] NotResourcesInput { get; }
```

- *Type:* string[]

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `NotActions`<sup>Required</sup> <a name="NotActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notActions"></a>

```csharp
public string[] NotActions { get; }
```

- *Type:* string[]

---

##### `NotResources`<sup>Required</sup> <a name="NotResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notResources"></a>

```csharp
public string[] NotResources { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessTokenPolicyStatementsList <a name="AccessTokenPolicyStatementsList" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new AccessTokenPolicyStatementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.get"></a>

```csharp
private AccessTokenPolicyStatementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessTokenPolicyStatementsOutputReference <a name="AccessTokenPolicyStatementsOutputReference" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new AccessTokenPolicyStatementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetNotActions">ResetNotActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetNotResources">ResetNotResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetNotActions` <a name="ResetNotActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetNotActions"></a>

```csharp
private void ResetNotActions()
```

##### `ResetNotResources` <a name="ResetNotResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetNotResources"></a>

```csharp
private void ResetNotResources()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notActionsInput">NotActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notResourcesInput">NotResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notActions">NotActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notResources">NotResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `NotActionsInput`<sup>Optional</sup> <a name="NotActionsInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notActionsInput"></a>

```csharp
public string[] NotActionsInput { get; }
```

- *Type:* string[]

---

##### `NotResourcesInput`<sup>Optional</sup> <a name="NotResourcesInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notResourcesInput"></a>

```csharp
public string[] NotResourcesInput { get; }
```

- *Type:* string[]

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `NotActions`<sup>Required</sup> <a name="NotActions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notActions"></a>

```csharp
public string[] NotActions { get; }
```

- *Type:* string[]

---

##### `NotResources`<sup>Required</sup> <a name="NotResources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notResources"></a>

```csharp
public string[] NotResources { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



