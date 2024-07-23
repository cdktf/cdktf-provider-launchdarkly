# `featureFlag` Submodule <a name="`featureFlag` Submodule" id="@cdktf/provider-launchdarkly.featureFlag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureFlag <a name="FeatureFlag" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag launchdarkly_feature_flag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlag(Construct Scope, string Id, FeatureFlagConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig">FeatureFlagConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig">FeatureFlagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability">PutClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties">PutCustomProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults">PutDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations">PutVariations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetArchived">ResetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetClientSideAvailability">ResetClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetCustomProperties">ResetCustomProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDefaults">ResetDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetIncludeInSnippet">ResetIncludeInSnippet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerId">ResetMaintainerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerTeamKey">ResetMaintainerTeamKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTemporary">ResetTemporary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetVariations">ResetVariations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClientSideAvailability` <a name="PutClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability"></a>

```csharp
private void PutClientSideAvailability(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability.parameter.value"></a>

- *Type:* object

---

##### `PutCustomProperties` <a name="PutCustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties"></a>

```csharp
private void PutCustomProperties(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties.parameter.value"></a>

- *Type:* object

---

##### `PutDefaults` <a name="PutDefaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults"></a>

```csharp
private void PutDefaults(FeatureFlagDefaults Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---

##### `PutVariations` <a name="PutVariations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations"></a>

```csharp
private void PutVariations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations.parameter.value"></a>

- *Type:* object

---

##### `ResetArchived` <a name="ResetArchived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetArchived"></a>

```csharp
private void ResetArchived()
```

##### `ResetClientSideAvailability` <a name="ResetClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetClientSideAvailability"></a>

```csharp
private void ResetClientSideAvailability()
```

##### `ResetCustomProperties` <a name="ResetCustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetCustomProperties"></a>

```csharp
private void ResetCustomProperties()
```

##### `ResetDefaults` <a name="ResetDefaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDefaults"></a>

```csharp
private void ResetDefaults()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeInSnippet` <a name="ResetIncludeInSnippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetIncludeInSnippet"></a>

```csharp
private void ResetIncludeInSnippet()
```

##### `ResetMaintainerId` <a name="ResetMaintainerId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerId"></a>

```csharp
private void ResetMaintainerId()
```

##### `ResetMaintainerTeamKey` <a name="ResetMaintainerTeamKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerTeamKey"></a>

```csharp
private void ResetMaintainerTeamKey()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemporary` <a name="ResetTemporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTemporary"></a>

```csharp
private void ResetTemporary()
```

##### `ResetVariations` <a name="ResetVariations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetVariations"></a>

```csharp
private void ResetVariations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FeatureFlag resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

FeatureFlag.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

FeatureFlag.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

FeatureFlag.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

FeatureFlag.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FeatureFlag resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FeatureFlag to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FeatureFlag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FeatureFlag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailability">ClientSideAvailability</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList">FeatureFlagClientSideAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customProperties">CustomProperties</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList">FeatureFlagCustomPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaults">Defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference">FeatureFlagDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variations">Variations</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList">FeatureFlagVariationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archivedInput">ArchivedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailabilityInput">ClientSideAvailabilityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customPropertiesInput">CustomPropertiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaultsInput">DefaultsInput</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippetInput">IncludeInSnippetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerIdInput">MaintainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKeyInput">MaintainerTeamKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporaryInput">TemporaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationsInput">VariationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationTypeInput">VariationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archived">Archived</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippet">IncludeInSnippet</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerId">MaintainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKey">MaintainerTeamKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporary">Temporary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationType">VariationType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClientSideAvailability`<sup>Required</sup> <a name="ClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailability"></a>

```csharp
public FeatureFlagClientSideAvailabilityList ClientSideAvailability { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList">FeatureFlagClientSideAvailabilityList</a>

---

##### `CustomProperties`<sup>Required</sup> <a name="CustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customProperties"></a>

```csharp
public FeatureFlagCustomPropertiesList CustomProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList">FeatureFlagCustomPropertiesList</a>

---

##### `Defaults`<sup>Required</sup> <a name="Defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaults"></a>

```csharp
public FeatureFlagDefaultsOutputReference Defaults { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference">FeatureFlagDefaultsOutputReference</a>

---

##### `Variations`<sup>Required</sup> <a name="Variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variations"></a>

```csharp
public FeatureFlagVariationsList Variations { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList">FeatureFlagVariationsList</a>

---

##### `ArchivedInput`<sup>Optional</sup> <a name="ArchivedInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archivedInput"></a>

```csharp
public object ArchivedInput { get; }
```

- *Type:* object

---

##### `ClientSideAvailabilityInput`<sup>Optional</sup> <a name="ClientSideAvailabilityInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailabilityInput"></a>

```csharp
public object ClientSideAvailabilityInput { get; }
```

- *Type:* object

---

##### `CustomPropertiesInput`<sup>Optional</sup> <a name="CustomPropertiesInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customPropertiesInput"></a>

```csharp
public object CustomPropertiesInput { get; }
```

- *Type:* object

---

##### `DefaultsInput`<sup>Optional</sup> <a name="DefaultsInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaultsInput"></a>

```csharp
public FeatureFlagDefaults DefaultsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeInSnippetInput`<sup>Optional</sup> <a name="IncludeInSnippetInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippetInput"></a>

```csharp
public object IncludeInSnippetInput { get; }
```

- *Type:* object

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MaintainerIdInput`<sup>Optional</sup> <a name="MaintainerIdInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerIdInput"></a>

```csharp
public string MaintainerIdInput { get; }
```

- *Type:* string

---

##### `MaintainerTeamKeyInput`<sup>Optional</sup> <a name="MaintainerTeamKeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKeyInput"></a>

```csharp
public string MaintainerTeamKeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TemporaryInput`<sup>Optional</sup> <a name="TemporaryInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporaryInput"></a>

```csharp
public object TemporaryInput { get; }
```

- *Type:* object

---

##### `VariationsInput`<sup>Optional</sup> <a name="VariationsInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationsInput"></a>

```csharp
public object VariationsInput { get; }
```

- *Type:* object

---

##### `VariationTypeInput`<sup>Optional</sup> <a name="VariationTypeInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationTypeInput"></a>

```csharp
public string VariationTypeInput { get; }
```

- *Type:* string

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archived"></a>

```csharp
public object Archived { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeInSnippet`<sup>Required</sup> <a name="IncludeInSnippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippet"></a>

```csharp
public object IncludeInSnippet { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MaintainerId`<sup>Required</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerId"></a>

```csharp
public string MaintainerId { get; }
```

- *Type:* string

---

##### `MaintainerTeamKey`<sup>Required</sup> <a name="MaintainerTeamKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKey"></a>

```csharp
public string MaintainerTeamKey { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Temporary`<sup>Required</sup> <a name="Temporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporary"></a>

```csharp
public object Temporary { get; }
```

- *Type:* object

---

##### `VariationType`<sup>Required</sup> <a name="VariationType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationType"></a>

```csharp
public string VariationType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureFlagClientSideAvailability <a name="FeatureFlagClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagClientSideAvailability {
    object UsingEnvironmentId = null,
    object UsingMobileKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingEnvironmentId">UsingEnvironmentId</a></code> | <code>object</code> | Whether this flag is available to SDKs using the client-side ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingMobileKey">UsingMobileKey</a></code> | <code>object</code> | Whether this flag is available to SDKs using a mobile key. |

---

##### `UsingEnvironmentId`<sup>Optional</sup> <a name="UsingEnvironmentId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingEnvironmentId"></a>

```csharp
public object UsingEnvironmentId { get; set; }
```

- *Type:* object

Whether this flag is available to SDKs using the client-side ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#using_environment_id FeatureFlag#using_environment_id}

---

##### `UsingMobileKey`<sup>Optional</sup> <a name="UsingMobileKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingMobileKey"></a>

```csharp
public object UsingMobileKey { get; set; }
```

- *Type:* object

Whether this flag is available to SDKs using a mobile key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#using_mobile_key FeatureFlag#using_mobile_key}

---

### FeatureFlagConfig <a name="FeatureFlagConfig" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Key,
    string Name,
    string ProjectKey,
    string VariationType,
    object Archived = null,
    object ClientSideAvailability = null,
    object CustomProperties = null,
    FeatureFlagDefaults Defaults = null,
    string Description = null,
    string Id = null,
    object IncludeInSnippet = null,
    string MaintainerId = null,
    string MaintainerTeamKey = null,
    string[] Tags = null,
    object Temporary = null,
    object Variations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.key">Key</a></code> | <code>string</code> | The unique feature flag key that references the flag in your application code. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.name">Name</a></code> | <code>string</code> | The human-readable name of the feature flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.projectKey">ProjectKey</a></code> | <code>string</code> | The feature flag's project key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variationType">VariationType</a></code> | <code>string</code> | The feature flag's variation type: `boolean`, `string`, `number` or `json`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.archived">Archived</a></code> | <code>object</code> | Specifies whether the flag is archived or not. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.clientSideAvailability">ClientSideAvailability</a></code> | <code>object</code> | client_side_availability block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.customProperties">CustomProperties</a></code> | <code>object</code> | custom_properties block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.defaults">Defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | defaults block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.description">Description</a></code> | <code>string</code> | The feature flag's description. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#id FeatureFlag#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.includeInSnippet">IncludeInSnippet</a></code> | <code>object</code> | Specifies whether this flag should be made available to the client-side JavaScript SDK using the client-side Id. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerId">MaintainerId</a></code> | <code>string</code> | The feature flag maintainer's 24 character alphanumeric team member ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerTeamKey">MaintainerTeamKey</a></code> | <code>string</code> | The key of the associated team that maintains this feature flag. `maintainer_id` cannot be set if `maintainer_team_key` is set. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.tags">Tags</a></code> | <code>string[]</code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.temporary">Temporary</a></code> | <code>object</code> | Specifies whether the flag is a temporary flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variations">Variations</a></code> | <code>object</code> | variations block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The unique feature flag key that references the flag in your application code.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#key FeatureFlag#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The human-readable name of the feature flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#name FeatureFlag#name}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

The feature flag's project key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#project_key FeatureFlag#project_key}

---

##### `VariationType`<sup>Required</sup> <a name="VariationType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variationType"></a>

```csharp
public string VariationType { get; set; }
```

- *Type:* string

The feature flag's variation type: `boolean`, `string`, `number` or `json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#variation_type FeatureFlag#variation_type}

---

##### `Archived`<sup>Optional</sup> <a name="Archived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.archived"></a>

```csharp
public object Archived { get; set; }
```

- *Type:* object

Specifies whether the flag is archived or not.

Note that you cannot create a new flag that is archived, but can update a flag to be archived.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#archived FeatureFlag#archived}

---

##### `ClientSideAvailability`<sup>Optional</sup> <a name="ClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.clientSideAvailability"></a>

```csharp
public object ClientSideAvailability { get; set; }
```

- *Type:* object

client_side_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#client_side_availability FeatureFlag#client_side_availability}

---

##### `CustomProperties`<sup>Optional</sup> <a name="CustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.customProperties"></a>

```csharp
public object CustomProperties { get; set; }
```

- *Type:* object

custom_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#custom_properties FeatureFlag#custom_properties}

---

##### `Defaults`<sup>Optional</sup> <a name="Defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.defaults"></a>

```csharp
public FeatureFlagDefaults Defaults { get; set; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#defaults FeatureFlag#defaults}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The feature flag's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#description FeatureFlag#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#id FeatureFlag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeInSnippet`<sup>Optional</sup> <a name="IncludeInSnippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.includeInSnippet"></a>

```csharp
public object IncludeInSnippet { get; set; }
```

- *Type:* object

Specifies whether this flag should be made available to the client-side JavaScript SDK using the client-side Id.

This value gets its default from your project configuration if not set. `include_in_snippet` is now deprecated. Please migrate to `client_side_availability.using_environment_id` to maintain future compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#include_in_snippet FeatureFlag#include_in_snippet}

---

##### `MaintainerId`<sup>Optional</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerId"></a>

```csharp
public string MaintainerId { get; set; }
```

- *Type:* string

The feature flag maintainer's 24 character alphanumeric team member ID.

`maintainer_team_key` cannot be set if `maintainer_id` is set. If neither is set, it will automatically be or stay set to the member ID associated with the API key used by your LaunchDarkly Terraform provider or the most recently-set maintainer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#maintainer_id FeatureFlag#maintainer_id}

---

##### `MaintainerTeamKey`<sup>Optional</sup> <a name="MaintainerTeamKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerTeamKey"></a>

```csharp
public string MaintainerTeamKey { get; set; }
```

- *Type:* string

The key of the associated team that maintains this feature flag. `maintainer_id` cannot be set if `maintainer_team_key` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#maintainer_team_key FeatureFlag#maintainer_team_key}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#tags FeatureFlag#tags}

---

##### `Temporary`<sup>Optional</sup> <a name="Temporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.temporary"></a>

```csharp
public object Temporary { get; set; }
```

- *Type:* object

Specifies whether the flag is a temporary flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#temporary FeatureFlag#temporary}

---

##### `Variations`<sup>Optional</sup> <a name="Variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variations"></a>

```csharp
public object Variations { get; set; }
```

- *Type:* object

variations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#variations FeatureFlag#variations}

---

### FeatureFlagCustomProperties <a name="FeatureFlagCustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagCustomProperties {
    string Key,
    string Name,
    string[] Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.key">Key</a></code> | <code>string</code> | The unique custom property key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.name">Name</a></code> | <code>string</code> | The name of the custom property. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.value">Value</a></code> | <code>string[]</code> | The list of custom property value strings. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The unique custom property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#key FeatureFlag#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#name FeatureFlag#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.value"></a>

```csharp
public string[] Value { get; set; }
```

- *Type:* string[]

The list of custom property value strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#value FeatureFlag#value}

---

### FeatureFlagDefaults <a name="FeatureFlagDefaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagDefaults {
    double OffVariation,
    double OnVariation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.offVariation">OffVariation</a></code> | <code>double</code> | The index of the variation the flag will default to in all new environments when off. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.onVariation">OnVariation</a></code> | <code>double</code> | The index of the variation the flag will default to in all new environments when on. |

---

##### `OffVariation`<sup>Required</sup> <a name="OffVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.offVariation"></a>

```csharp
public double OffVariation { get; set; }
```

- *Type:* double

The index of the variation the flag will default to in all new environments when off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#off_variation FeatureFlag#off_variation}

---

##### `OnVariation`<sup>Required</sup> <a name="OnVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.onVariation"></a>

```csharp
public double OnVariation { get; set; }
```

- *Type:* double

The index of the variation the flag will default to in all new environments when on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#on_variation FeatureFlag#on_variation}

---

### FeatureFlagVariations <a name="FeatureFlagVariations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagVariations {
    string Value,
    string Description = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.value">Value</a></code> | <code>string</code> | The variation value. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.description">Description</a></code> | <code>string</code> | The variation's description. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.name">Name</a></code> | <code>string</code> | The name of the variation. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The variation value.

The value's type must correspond to the `variation_type` argument. For example: `variation_type = "boolean"` accepts only `true` or `false`. The `number` variation type accepts both floats and ints, but please note that any trailing zeroes on floats will be trimmed (i.e. `1.1` and `1.100` will both be converted to `1.1`).

If you wish to define an empty string variation, you must still define the value field on the variations block like so:

```terraform
variations {
  value = ""
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#value FeatureFlag#value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The variation's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#description FeatureFlag#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/feature_flag#name FeatureFlag#name}

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureFlagClientSideAvailabilityList <a name="FeatureFlagClientSideAvailabilityList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagClientSideAvailabilityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get"></a>

```csharp
private FeatureFlagClientSideAvailabilityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagClientSideAvailabilityOutputReference <a name="FeatureFlagClientSideAvailabilityOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagClientSideAvailabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingEnvironmentId">ResetUsingEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingMobileKey">ResetUsingMobileKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUsingEnvironmentId` <a name="ResetUsingEnvironmentId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingEnvironmentId"></a>

```csharp
private void ResetUsingEnvironmentId()
```

##### `ResetUsingMobileKey` <a name="ResetUsingMobileKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingMobileKey"></a>

```csharp
private void ResetUsingMobileKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput">UsingEnvironmentIdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput">UsingMobileKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId">UsingEnvironmentId</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey">UsingMobileKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsingEnvironmentIdInput`<sup>Optional</sup> <a name="UsingEnvironmentIdInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput"></a>

```csharp
public object UsingEnvironmentIdInput { get; }
```

- *Type:* object

---

##### `UsingMobileKeyInput`<sup>Optional</sup> <a name="UsingMobileKeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput"></a>

```csharp
public object UsingMobileKeyInput { get; }
```

- *Type:* object

---

##### `UsingEnvironmentId`<sup>Required</sup> <a name="UsingEnvironmentId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId"></a>

```csharp
public object UsingEnvironmentId { get; }
```

- *Type:* object

---

##### `UsingMobileKey`<sup>Required</sup> <a name="UsingMobileKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey"></a>

```csharp
public object UsingMobileKey { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagCustomPropertiesList <a name="FeatureFlagCustomPropertiesList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagCustomPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get"></a>

```csharp
private FeatureFlagCustomPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagCustomPropertiesOutputReference <a name="FeatureFlagCustomPropertiesOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagCustomPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.valueInput">ValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.value">Value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.valueInput"></a>

```csharp
public string[] ValueInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.value"></a>

```csharp
public string[] Value { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagDefaultsOutputReference <a name="FeatureFlagDefaultsOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagDefaultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariationInput">OffVariationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariationInput">OnVariationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariation">OffVariation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariation">OnVariation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OffVariationInput`<sup>Optional</sup> <a name="OffVariationInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariationInput"></a>

```csharp
public double OffVariationInput { get; }
```

- *Type:* double

---

##### `OnVariationInput`<sup>Optional</sup> <a name="OnVariationInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariationInput"></a>

```csharp
public double OnVariationInput { get; }
```

- *Type:* double

---

##### `OffVariation`<sup>Required</sup> <a name="OffVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariation"></a>

```csharp
public double OffVariation { get; }
```

- *Type:* double

---

##### `OnVariation`<sup>Required</sup> <a name="OnVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariation"></a>

```csharp
public double OnVariation { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.internalValue"></a>

```csharp
public FeatureFlagDefaults InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---


### FeatureFlagVariationsList <a name="FeatureFlagVariationsList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagVariationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get"></a>

```csharp
private FeatureFlagVariationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagVariationsOutputReference <a name="FeatureFlagVariationsOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagVariationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



