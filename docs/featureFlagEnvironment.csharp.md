# `featureFlagEnvironment` Submodule <a name="`featureFlagEnvironment` Submodule" id="@cdktf/provider-launchdarkly.featureFlagEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureFlagEnvironment <a name="FeatureFlagEnvironment" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment launchdarkly_feature_flag_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironment(Construct Scope, string Id, FeatureFlagEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig">FeatureFlagEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig">FeatureFlagEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putContextTargets">PutContextTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough">PutFallthrough</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putPrerequisites">PutPrerequisites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetContextTargets">ResetContextTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOn">ResetOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetPrerequisites">ResetPrerequisites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTargets">ResetTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTrackEvents">ResetTrackEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContextTargets` <a name="PutContextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putContextTargets"></a>

```csharp
private void PutContextTargets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putContextTargets.parameter.value"></a>

- *Type:* object

---

##### `PutFallthrough` <a name="PutFallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough"></a>

```csharp
private void PutFallthrough(FeatureFlagEnvironmentFallthrough Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

---

##### `PutPrerequisites` <a name="PutPrerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putPrerequisites"></a>

```csharp
private void PutPrerequisites(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putPrerequisites.parameter.value"></a>

- *Type:* object

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putRules.parameter.value"></a>

- *Type:* object

---

##### `PutTargets` <a name="PutTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putTargets"></a>

```csharp
private void PutTargets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putTargets.parameter.value"></a>

- *Type:* object

---

##### `ResetContextTargets` <a name="ResetContextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetContextTargets"></a>

```csharp
private void ResetContextTargets()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOn` <a name="ResetOn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOn"></a>

```csharp
private void ResetOn()
```

##### `ResetPrerequisites` <a name="ResetPrerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetPrerequisites"></a>

```csharp
private void ResetPrerequisites()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetRules"></a>

```csharp
private void ResetRules()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTargets"></a>

```csharp
private void ResetTargets()
```

##### `ResetTrackEvents` <a name="ResetTrackEvents" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTrackEvents"></a>

```csharp
private void ResetTrackEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FeatureFlagEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

FeatureFlagEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

FeatureFlagEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

FeatureFlagEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

FeatureFlagEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FeatureFlagEnvironment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FeatureFlagEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FeatureFlagEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FeatureFlagEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargets">ContextTargets</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList">FeatureFlagEnvironmentContextTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthrough">Fallthrough</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference">FeatureFlagEnvironmentFallthroughOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisites">Prerequisites</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList">FeatureFlagEnvironmentPrerequisitesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList">FeatureFlagEnvironmentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targets">Targets</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList">FeatureFlagEnvironmentTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargetsInput">ContextTargetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKeyInput">EnvKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthroughInput">FallthroughInput</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagIdInput">FlagIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariationInput">OffVariationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.onInput">OnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisitesInput">PrerequisitesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targetsInput">TargetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEventsInput">TrackEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKey">EnvKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagId">FlagId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariation">OffVariation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.on">On</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEvents">TrackEvents</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContextTargets`<sup>Required</sup> <a name="ContextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargets"></a>

```csharp
public FeatureFlagEnvironmentContextTargetsList ContextTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList">FeatureFlagEnvironmentContextTargetsList</a>

---

##### `Fallthrough`<sup>Required</sup> <a name="Fallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthrough"></a>

```csharp
public FeatureFlagEnvironmentFallthroughOutputReference Fallthrough { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference">FeatureFlagEnvironmentFallthroughOutputReference</a>

---

##### `Prerequisites`<sup>Required</sup> <a name="Prerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisites"></a>

```csharp
public FeatureFlagEnvironmentPrerequisitesList Prerequisites { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList">FeatureFlagEnvironmentPrerequisitesList</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rules"></a>

```csharp
public FeatureFlagEnvironmentRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList">FeatureFlagEnvironmentRulesList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targets"></a>

```csharp
public FeatureFlagEnvironmentTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList">FeatureFlagEnvironmentTargetsList</a>

---

##### `ContextTargetsInput`<sup>Optional</sup> <a name="ContextTargetsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargetsInput"></a>

```csharp
public object ContextTargetsInput { get; }
```

- *Type:* object

---

##### `EnvKeyInput`<sup>Optional</sup> <a name="EnvKeyInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKeyInput"></a>

```csharp
public string EnvKeyInput { get; }
```

- *Type:* string

---

##### `FallthroughInput`<sup>Optional</sup> <a name="FallthroughInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthroughInput"></a>

```csharp
public FeatureFlagEnvironmentFallthrough FallthroughInput { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

---

##### `FlagIdInput`<sup>Optional</sup> <a name="FlagIdInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagIdInput"></a>

```csharp
public string FlagIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OffVariationInput`<sup>Optional</sup> <a name="OffVariationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariationInput"></a>

```csharp
public double OffVariationInput { get; }
```

- *Type:* double

---

##### `OnInput`<sup>Optional</sup> <a name="OnInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.onInput"></a>

```csharp
public object OnInput { get; }
```

- *Type:* object

---

##### `PrerequisitesInput`<sup>Optional</sup> <a name="PrerequisitesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisitesInput"></a>

```csharp
public object PrerequisitesInput { get; }
```

- *Type:* object

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targetsInput"></a>

```csharp
public object TargetsInput { get; }
```

- *Type:* object

---

##### `TrackEventsInput`<sup>Optional</sup> <a name="TrackEventsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEventsInput"></a>

```csharp
public object TrackEventsInput { get; }
```

- *Type:* object

---

##### `EnvKey`<sup>Required</sup> <a name="EnvKey" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKey"></a>

```csharp
public string EnvKey { get; }
```

- *Type:* string

---

##### `FlagId`<sup>Required</sup> <a name="FlagId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagId"></a>

```csharp
public string FlagId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OffVariation`<sup>Required</sup> <a name="OffVariation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariation"></a>

```csharp
public double OffVariation { get; }
```

- *Type:* double

---

##### `On`<sup>Required</sup> <a name="On" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.on"></a>

```csharp
public object On { get; }
```

- *Type:* object

---

##### `TrackEvents`<sup>Required</sup> <a name="TrackEvents" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEvents"></a>

```csharp
public object TrackEvents { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureFlagEnvironmentConfig <a name="FeatureFlagEnvironmentConfig" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EnvKey,
    FeatureFlagEnvironmentFallthrough Fallthrough,
    string FlagId,
    double OffVariation,
    object ContextTargets = null,
    string Id = null,
    object On = null,
    object Prerequisites = null,
    object Rules = null,
    object Targets = null,
    object TrackEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.envKey">EnvKey</a></code> | <code>string</code> | The environment key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.fallthrough">Fallthrough</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | fallthrough block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.flagId">FlagId</a></code> | <code>string</code> | The feature flag's unique `id` in the format `project_key/flag_key`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.offVariation">OffVariation</a></code> | <code>double</code> | The index of the variation to serve if targeting is disabled. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.contextTargets">ContextTargets</a></code> | <code>object</code> | context_targets block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#id FeatureFlagEnvironment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.on">On</a></code> | <code>object</code> | Whether targeting is enabled. Defaults to `false` if not set. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.prerequisites">Prerequisites</a></code> | <code>object</code> | prerequisites block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.rules">Rules</a></code> | <code>object</code> | rules block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.targets">Targets</a></code> | <code>object</code> | targets block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.trackEvents">TrackEvents</a></code> | <code>object</code> | Whether to send event data back to LaunchDarkly. Defaults to `false` if not set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnvKey`<sup>Required</sup> <a name="EnvKey" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.envKey"></a>

```csharp
public string EnvKey { get; set; }
```

- *Type:* string

The environment key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#env_key FeatureFlagEnvironment#env_key}

---

##### `Fallthrough`<sup>Required</sup> <a name="Fallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.fallthrough"></a>

```csharp
public FeatureFlagEnvironmentFallthrough Fallthrough { get; set; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

fallthrough block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#fallthrough FeatureFlagEnvironment#fallthrough}

---

##### `FlagId`<sup>Required</sup> <a name="FlagId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.flagId"></a>

```csharp
public string FlagId { get; set; }
```

- *Type:* string

The feature flag's unique `id` in the format `project_key/flag_key`.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#flag_id FeatureFlagEnvironment#flag_id}

---

##### `OffVariation`<sup>Required</sup> <a name="OffVariation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.offVariation"></a>

```csharp
public double OffVariation { get; set; }
```

- *Type:* double

The index of the variation to serve if targeting is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#off_variation FeatureFlagEnvironment#off_variation}

---

##### `ContextTargets`<sup>Optional</sup> <a name="ContextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.contextTargets"></a>

```csharp
public object ContextTargets { get; set; }
```

- *Type:* object

context_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#context_targets FeatureFlagEnvironment#context_targets}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#id FeatureFlagEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `On`<sup>Optional</sup> <a name="On" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.on"></a>

```csharp
public object On { get; set; }
```

- *Type:* object

Whether targeting is enabled. Defaults to `false` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#on FeatureFlagEnvironment#on}

---

##### `Prerequisites`<sup>Optional</sup> <a name="Prerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.prerequisites"></a>

```csharp
public object Prerequisites { get; set; }
```

- *Type:* object

prerequisites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#prerequisites FeatureFlagEnvironment#prerequisites}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#rules FeatureFlagEnvironment#rules}

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.targets"></a>

```csharp
public object Targets { get; set; }
```

- *Type:* object

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#targets FeatureFlagEnvironment#targets}

---

##### `TrackEvents`<sup>Optional</sup> <a name="TrackEvents" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.trackEvents"></a>

```csharp
public object TrackEvents { get; set; }
```

- *Type:* object

Whether to send event data back to LaunchDarkly. Defaults to `false` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#track_events FeatureFlagEnvironment#track_events}

---

### FeatureFlagEnvironmentContextTargets <a name="FeatureFlagEnvironmentContextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentContextTargets {
    string ContextKind,
    string[] Values,
    double Variation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.contextKind">ContextKind</a></code> | <code>string</code> | The context kind on which the flag should target in this environment. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.values">Values</a></code> | <code>string[]</code> | List of `user` strings to target. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.variation">Variation</a></code> | <code>double</code> | The index of the variation to serve if a user target value is matched. |

---

##### `ContextKind`<sup>Required</sup> <a name="ContextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.contextKind"></a>

```csharp
public string ContextKind { get; set; }
```

- *Type:* string

The context kind on which the flag should target in this environment.

User (`user`) targets should be specified as `targets` attribute blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

List of `user` strings to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.variation"></a>

```csharp
public double Variation { get; set; }
```

- *Type:* double

The index of the variation to serve if a user target value is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentFallthrough <a name="FeatureFlagEnvironmentFallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentFallthrough {
    string BucketBy = null,
    string ContextKind = null,
    double[] RolloutWeights = null,
    double Variation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.bucketBy">BucketBy</a></code> | <code>string</code> | Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.contextKind">ContextKind</a></code> | <code>string</code> | The context kind associated with the specified rollout. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.rolloutWeights">RolloutWeights</a></code> | <code>double[]</code> | List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.variation">Variation</a></code> | <code>double</code> | The default integer variation index to serve if no `prerequisites`, `target`, or `rules` apply. |

---

##### `BucketBy`<sup>Optional</sup> <a name="BucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.bucketBy"></a>

```csharp
public string BucketBy { get; set; }
```

- *Type:* string

Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#bucket_by FeatureFlagEnvironment#bucket_by}

---

##### `ContextKind`<sup>Optional</sup> <a name="ContextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.contextKind"></a>

```csharp
public string ContextKind { get; set; }
```

- *Type:* string

The context kind associated with the specified rollout.

This argument is only valid if rollout_weights is also specified. If omitted, defaults to `user`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}

---

##### `RolloutWeights`<sup>Optional</sup> <a name="RolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.rolloutWeights"></a>

```csharp
public double[] RolloutWeights { get; set; }
```

- *Type:* double[]

List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`.

The sum of the `rollout_weights` must equal 100000 and the number of rollout weights specified in the array must match the number of flag variations. You must specify either `variation` or `rollout_weights`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#rollout_weights FeatureFlagEnvironment#rollout_weights}

---

##### `Variation`<sup>Optional</sup> <a name="Variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.variation"></a>

```csharp
public double Variation { get; set; }
```

- *Type:* double

The default integer variation index to serve if no `prerequisites`, `target`, or `rules` apply.

You must specify either `variation` or `rollout_weights`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentPrerequisites <a name="FeatureFlagEnvironmentPrerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentPrerequisites {
    string FlagKey,
    double Variation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.flagKey">FlagKey</a></code> | <code>string</code> | The prerequisite feature flag's `key`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.variation">Variation</a></code> | <code>double</code> | The index of the prerequisite feature flag's variation to target. |

---

##### `FlagKey`<sup>Required</sup> <a name="FlagKey" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.flagKey"></a>

```csharp
public string FlagKey { get; set; }
```

- *Type:* string

The prerequisite feature flag's `key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#flag_key FeatureFlagEnvironment#flag_key}

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.variation"></a>

```csharp
public double Variation { get; set; }
```

- *Type:* double

The index of the prerequisite feature flag's variation to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentRules <a name="FeatureFlagEnvironmentRules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentRules {
    string BucketBy = null,
    object Clauses = null,
    string Description = null,
    double[] RolloutWeights = null,
    double Variation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.bucketBy">BucketBy</a></code> | <code>string</code> | Group percentage rollout by a custom attribute. This argument is only valid if `rollout_weights` is also specified. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.clauses">Clauses</a></code> | <code>object</code> | clauses block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.description">Description</a></code> | <code>string</code> | A human-readable description of the targeting rule. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.rolloutWeights">RolloutWeights</a></code> | <code>double[]</code> | List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.variation">Variation</a></code> | <code>double</code> | The integer variation index to serve if the rule clauses evaluate to `true`. |

---

##### `BucketBy`<sup>Optional</sup> <a name="BucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.bucketBy"></a>

```csharp
public string BucketBy { get; set; }
```

- *Type:* string

Group percentage rollout by a custom attribute. This argument is only valid if `rollout_weights` is also specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#bucket_by FeatureFlagEnvironment#bucket_by}

---

##### `Clauses`<sup>Optional</sup> <a name="Clauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.clauses"></a>

```csharp
public object Clauses { get; set; }
```

- *Type:* object

clauses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#clauses FeatureFlagEnvironment#clauses}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of the targeting rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#description FeatureFlagEnvironment#description}

---

##### `RolloutWeights`<sup>Optional</sup> <a name="RolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.rolloutWeights"></a>

```csharp
public double[] RolloutWeights { get; set; }
```

- *Type:* double[]

List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`.

The sum of the `rollout_weights` must equal 100000 and the number of rollout weights specified in the array must match the number of flag variations. You must specify either `variation` or `rollout_weights`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#rollout_weights FeatureFlagEnvironment#rollout_weights}

---

##### `Variation`<sup>Optional</sup> <a name="Variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.variation"></a>

```csharp
public double Variation { get; set; }
```

- *Type:* double

The integer variation index to serve if the rule clauses evaluate to `true`.

You must specify either `variation` or `rollout_weights`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentRulesClauses <a name="FeatureFlagEnvironmentRulesClauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentRulesClauses {
    string Attribute,
    string Op,
    string[] Values,
    string ContextKind = null,
    object Negate = null,
    string ValueType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.attribute">Attribute</a></code> | <code>string</code> | The user attribute to operate on. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.op">Op</a></code> | <code>string</code> | The operator associated with the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.values">Values</a></code> | <code>string[]</code> | The list of values associated with the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.contextKind">ContextKind</a></code> | <code>string</code> | The context kind associated with this rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.negate">Negate</a></code> | <code>object</code> | Whether to negate the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.valueType">ValueType</a></code> | <code>string</code> | The type for each of the clause's values. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

The user attribute to operate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#attribute FeatureFlagEnvironment#attribute}

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.op"></a>

```csharp
public string Op { get; set; }
```

- *Type:* string

The operator associated with the rule clause.

Available options are `in`, `endsWith`, `startsWith`, `matches`, `contains`, `lessThan`, `lessThanOrEqual`, `greaterThanOrEqual`, `before`, `after`, `segmentMatch`, `semVerEqual`, `semVerLessThan`, and `semVerGreaterThan`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#op FeatureFlagEnvironment#op}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The list of values associated with the rule clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}

---

##### `ContextKind`<sup>Optional</sup> <a name="ContextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.contextKind"></a>

```csharp
public string ContextKind { get; set; }
```

- *Type:* string

The context kind associated with this rule clause.

This argument is only valid if `rollout_weights` is also specified. If omitted, defaults to `user`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

Whether to negate the rule clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#negate FeatureFlagEnvironment#negate}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

The type for each of the clause's values.

Available types are `boolean`, `string`, and `number`. If omitted, `value_type` defaults to `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#value_type FeatureFlagEnvironment#value_type}

---

### FeatureFlagEnvironmentTargets <a name="FeatureFlagEnvironmentTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentTargets {
    string[] Values,
    double Variation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.values">Values</a></code> | <code>string[]</code> | List of `user` strings to target. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.variation">Variation</a></code> | <code>double</code> | The index of the variation to serve if a user target value is matched. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

List of `user` strings to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.variation"></a>

```csharp
public double Variation { get; set; }
```

- *Type:* double

The index of the variation to serve if a user target value is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureFlagEnvironmentContextTargetsList <a name="FeatureFlagEnvironmentContextTargetsList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentContextTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.get"></a>

```csharp
private FeatureFlagEnvironmentContextTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagEnvironmentContextTargetsOutputReference <a name="FeatureFlagEnvironmentContextTargetsOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentContextTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKindInput">ContextKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variationInput">VariationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKind">ContextKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variation">Variation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContextKindInput`<sup>Optional</sup> <a name="ContextKindInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKindInput"></a>

```csharp
public string ContextKindInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `VariationInput`<sup>Optional</sup> <a name="VariationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variationInput"></a>

```csharp
public double VariationInput { get; }
```

- *Type:* double

---

##### `ContextKind`<sup>Required</sup> <a name="ContextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKind"></a>

```csharp
public string ContextKind { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variation"></a>

```csharp
public double Variation { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagEnvironmentFallthroughOutputReference <a name="FeatureFlagEnvironmentFallthroughOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentFallthroughOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetBucketBy">ResetBucketBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetContextKind">ResetContextKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetRolloutWeights">ResetRolloutWeights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetVariation">ResetVariation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketBy` <a name="ResetBucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetBucketBy"></a>

```csharp
private void ResetBucketBy()
```

##### `ResetContextKind` <a name="ResetContextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetContextKind"></a>

```csharp
private void ResetContextKind()
```

##### `ResetRolloutWeights` <a name="ResetRolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetRolloutWeights"></a>

```csharp
private void ResetRolloutWeights()
```

##### `ResetVariation` <a name="ResetVariation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetVariation"></a>

```csharp
private void ResetVariation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketByInput">BucketByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKindInput">ContextKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeightsInput">RolloutWeightsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variationInput">VariationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketBy">BucketBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKind">ContextKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeights">RolloutWeights</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variation">Variation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketByInput`<sup>Optional</sup> <a name="BucketByInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketByInput"></a>

```csharp
public string BucketByInput { get; }
```

- *Type:* string

---

##### `ContextKindInput`<sup>Optional</sup> <a name="ContextKindInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKindInput"></a>

```csharp
public string ContextKindInput { get; }
```

- *Type:* string

---

##### `RolloutWeightsInput`<sup>Optional</sup> <a name="RolloutWeightsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeightsInput"></a>

```csharp
public double[] RolloutWeightsInput { get; }
```

- *Type:* double[]

---

##### `VariationInput`<sup>Optional</sup> <a name="VariationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variationInput"></a>

```csharp
public double VariationInput { get; }
```

- *Type:* double

---

##### `BucketBy`<sup>Required</sup> <a name="BucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketBy"></a>

```csharp
public string BucketBy { get; }
```

- *Type:* string

---

##### `ContextKind`<sup>Required</sup> <a name="ContextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKind"></a>

```csharp
public string ContextKind { get; }
```

- *Type:* string

---

##### `RolloutWeights`<sup>Required</sup> <a name="RolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeights"></a>

```csharp
public double[] RolloutWeights { get; }
```

- *Type:* double[]

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variation"></a>

```csharp
public double Variation { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.internalValue"></a>

```csharp
public FeatureFlagEnvironmentFallthrough InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

---


### FeatureFlagEnvironmentPrerequisitesList <a name="FeatureFlagEnvironmentPrerequisitesList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentPrerequisitesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.get"></a>

```csharp
private FeatureFlagEnvironmentPrerequisitesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagEnvironmentPrerequisitesOutputReference <a name="FeatureFlagEnvironmentPrerequisitesOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentPrerequisitesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKeyInput">FlagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variationInput">VariationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKey">FlagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variation">Variation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FlagKeyInput`<sup>Optional</sup> <a name="FlagKeyInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKeyInput"></a>

```csharp
public string FlagKeyInput { get; }
```

- *Type:* string

---

##### `VariationInput`<sup>Optional</sup> <a name="VariationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variationInput"></a>

```csharp
public double VariationInput { get; }
```

- *Type:* double

---

##### `FlagKey`<sup>Required</sup> <a name="FlagKey" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKey"></a>

```csharp
public string FlagKey { get; }
```

- *Type:* string

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variation"></a>

```csharp
public double Variation { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagEnvironmentRulesClausesList <a name="FeatureFlagEnvironmentRulesClausesList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentRulesClausesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.get"></a>

```csharp
private FeatureFlagEnvironmentRulesClausesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagEnvironmentRulesClausesOutputReference <a name="FeatureFlagEnvironmentRulesClausesOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentRulesClausesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetContextKind">ResetContextKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContextKind` <a name="ResetContextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetContextKind"></a>

```csharp
private void ResetContextKind()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetValueType"></a>

```csharp
private void ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKindInput">ContextKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.opInput">OpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKind">ContextKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.op">Op</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `ContextKindInput`<sup>Optional</sup> <a name="ContextKindInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKindInput"></a>

```csharp
public string ContextKindInput { get; }
```

- *Type:* string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `OpInput`<sup>Optional</sup> <a name="OpInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.opInput"></a>

```csharp
public string OpInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `ContextKind`<sup>Required</sup> <a name="ContextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKind"></a>

```csharp
public string ContextKind { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.op"></a>

```csharp
public string Op { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagEnvironmentRulesList <a name="FeatureFlagEnvironmentRulesList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.get"></a>

```csharp
private FeatureFlagEnvironmentRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagEnvironmentRulesOutputReference <a name="FeatureFlagEnvironmentRulesOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.putClauses">PutClauses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetBucketBy">ResetBucketBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetClauses">ResetClauses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetRolloutWeights">ResetRolloutWeights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetVariation">ResetVariation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClauses` <a name="PutClauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.putClauses"></a>

```csharp
private void PutClauses(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.putClauses.parameter.value"></a>

- *Type:* object

---

##### `ResetBucketBy` <a name="ResetBucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetBucketBy"></a>

```csharp
private void ResetBucketBy()
```

##### `ResetClauses` <a name="ResetClauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetClauses"></a>

```csharp
private void ResetClauses()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRolloutWeights` <a name="ResetRolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetRolloutWeights"></a>

```csharp
private void ResetRolloutWeights()
```

##### `ResetVariation` <a name="ResetVariation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetVariation"></a>

```csharp
private void ResetVariation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clauses">Clauses</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList">FeatureFlagEnvironmentRulesClausesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketByInput">BucketByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clausesInput">ClausesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeightsInput">RolloutWeightsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variationInput">VariationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketBy">BucketBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeights">RolloutWeights</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variation">Variation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Clauses`<sup>Required</sup> <a name="Clauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clauses"></a>

```csharp
public FeatureFlagEnvironmentRulesClausesList Clauses { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList">FeatureFlagEnvironmentRulesClausesList</a>

---

##### `BucketByInput`<sup>Optional</sup> <a name="BucketByInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketByInput"></a>

```csharp
public string BucketByInput { get; }
```

- *Type:* string

---

##### `ClausesInput`<sup>Optional</sup> <a name="ClausesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clausesInput"></a>

```csharp
public object ClausesInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RolloutWeightsInput`<sup>Optional</sup> <a name="RolloutWeightsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeightsInput"></a>

```csharp
public double[] RolloutWeightsInput { get; }
```

- *Type:* double[]

---

##### `VariationInput`<sup>Optional</sup> <a name="VariationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variationInput"></a>

```csharp
public double VariationInput { get; }
```

- *Type:* double

---

##### `BucketBy`<sup>Required</sup> <a name="BucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketBy"></a>

```csharp
public string BucketBy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RolloutWeights`<sup>Required</sup> <a name="RolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeights"></a>

```csharp
public double[] RolloutWeights { get; }
```

- *Type:* double[]

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variation"></a>

```csharp
public double Variation { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagEnvironmentTargetsList <a name="FeatureFlagEnvironmentTargetsList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.get"></a>

```csharp
private FeatureFlagEnvironmentTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FeatureFlagEnvironmentTargetsOutputReference <a name="FeatureFlagEnvironmentTargetsOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FeatureFlagEnvironmentTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variationInput">VariationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variation">Variation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `VariationInput`<sup>Optional</sup> <a name="VariationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variationInput"></a>

```csharp
public double VariationInput { get; }
```

- *Type:* double

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variation"></a>

```csharp
public double Variation { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



