# `metric` Submodule <a name="`metric` Submodule" id="@cdktf/provider-launchdarkly.metric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Metric <a name="Metric" id="@cdktf/provider-launchdarkly.metric.Metric"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric launchdarkly_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new Metric(Construct Scope, string Id, MetricConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig">MetricConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.metric.MetricConfig">MetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.putUrls">PutUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetEventKey">ResetEventKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetIsActive">ResetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetIsNumeric">ResetIsNumeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetMaintainerId">ResetMaintainerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetRandomizationUnits">ResetRandomizationUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetSuccessCriteria">ResetSuccessCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetUrls">ResetUrls</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.metric.Metric.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.metric.Metric.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-launchdarkly.metric.Metric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.metric.Metric.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.metric.Metric.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-launchdarkly.metric.Metric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.metric.Metric.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-launchdarkly.metric.Metric.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.metric.Metric.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.metric.Metric.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-launchdarkly.metric.Metric.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-launchdarkly.metric.Metric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-launchdarkly.metric.Metric.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-launchdarkly.metric.Metric.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.metric.Metric.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.metric.Metric.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-launchdarkly.metric.Metric.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.metric.Metric.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-launchdarkly.metric.Metric.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-launchdarkly.metric.Metric.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-launchdarkly.metric.Metric.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-launchdarkly.metric.Metric.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.metric.Metric.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutUrls` <a name="PutUrls" id="@cdktf/provider-launchdarkly.metric.Metric.putUrls"></a>

```csharp
private void PutUrls(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.metric.Metric.putUrls.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-launchdarkly.metric.Metric.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEventKey` <a name="ResetEventKey" id="@cdktf/provider-launchdarkly.metric.Metric.resetEventKey"></a>

```csharp
private void ResetEventKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-launchdarkly.metric.Metric.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsActive` <a name="ResetIsActive" id="@cdktf/provider-launchdarkly.metric.Metric.resetIsActive"></a>

```csharp
private void ResetIsActive()
```

##### `ResetIsNumeric` <a name="ResetIsNumeric" id="@cdktf/provider-launchdarkly.metric.Metric.resetIsNumeric"></a>

```csharp
private void ResetIsNumeric()
```

##### `ResetMaintainerId` <a name="ResetMaintainerId" id="@cdktf/provider-launchdarkly.metric.Metric.resetMaintainerId"></a>

```csharp
private void ResetMaintainerId()
```

##### `ResetRandomizationUnits` <a name="ResetRandomizationUnits" id="@cdktf/provider-launchdarkly.metric.Metric.resetRandomizationUnits"></a>

```csharp
private void ResetRandomizationUnits()
```

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-launchdarkly.metric.Metric.resetSelector"></a>

```csharp
private void ResetSelector()
```

##### `ResetSuccessCriteria` <a name="ResetSuccessCriteria" id="@cdktf/provider-launchdarkly.metric.Metric.resetSuccessCriteria"></a>

```csharp
private void ResetSuccessCriteria()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-launchdarkly.metric.Metric.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-launchdarkly.metric.Metric.resetUnit"></a>

```csharp
private void ResetUnit()
```

##### `ResetUrls` <a name="ResetUrls" id="@cdktf/provider-launchdarkly.metric.Metric.resetUrls"></a>

```csharp
private void ResetUrls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Metric resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.metric.Metric.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

Metric.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.metric.Metric.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

Metric.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

Metric.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

Metric.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Metric resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Metric to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Metric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Metric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.urls">Urls</a></code> | <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList">MetricUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.eventKeyInput">EventKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isActiveInput">IsActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isNumericInput">IsNumericInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.maintainerIdInput">MaintainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnitsInput">RandomizationUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.selectorInput">SelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.successCriteriaInput">SuccessCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.urlsInput">UrlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.eventKey">EventKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isActive">IsActive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isNumeric">IsNumeric</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.maintainerId">MaintainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnits">RandomizationUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.selector">Selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.successCriteria">SuccessCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.unit">Unit</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.metric.Metric.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.metric.Metric.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.metric.Metric.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.metric.Metric.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.metric.Metric.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.metric.Metric.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.metric.Metric.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.metric.Metric.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.metric.Metric.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.metric.Metric.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.metric.Metric.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.metric.Metric.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.metric.Metric.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.metric.Metric.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-launchdarkly.metric.Metric.property.urls"></a>

```csharp
public MetricUrlsList Urls { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList">MetricUrlsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventKeyInput`<sup>Optional</sup> <a name="EventKeyInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.eventKeyInput"></a>

```csharp
public string EventKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.isActiveInput"></a>

```csharp
public object IsActiveInput { get; }
```

- *Type:* object

---

##### `IsNumericInput`<sup>Optional</sup> <a name="IsNumericInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.isNumericInput"></a>

```csharp
public object IsNumericInput { get; }
```

- *Type:* object

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `MaintainerIdInput`<sup>Optional</sup> <a name="MaintainerIdInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.maintainerIdInput"></a>

```csharp
public string MaintainerIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `RandomizationUnitsInput`<sup>Optional</sup> <a name="RandomizationUnitsInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnitsInput"></a>

```csharp
public string[] RandomizationUnitsInput { get; }
```

- *Type:* string[]

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.selectorInput"></a>

```csharp
public string SelectorInput { get; }
```

- *Type:* string

---

##### `SuccessCriteriaInput`<sup>Optional</sup> <a name="SuccessCriteriaInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.successCriteriaInput"></a>

```csharp
public string SuccessCriteriaInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `UrlsInput`<sup>Optional</sup> <a name="UrlsInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.urlsInput"></a>

```csharp
public object UrlsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-launchdarkly.metric.Metric.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EventKey`<sup>Required</sup> <a name="EventKey" id="@cdktf/provider-launchdarkly.metric.Metric.property.eventKey"></a>

```csharp
public string EventKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.metric.Metric.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-launchdarkly.metric.Metric.property.isActive"></a>

```csharp
public object IsActive { get; }
```

- *Type:* object

---

##### `IsNumeric`<sup>Required</sup> <a name="IsNumeric" id="@cdktf/provider-launchdarkly.metric.Metric.property.isNumeric"></a>

```csharp
public object IsNumeric { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.metric.Metric.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.metric.Metric.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `MaintainerId`<sup>Required</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.metric.Metric.property.maintainerId"></a>

```csharp
public string MaintainerId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.metric.Metric.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.metric.Metric.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `RandomizationUnits`<sup>Required</sup> <a name="RandomizationUnits" id="@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnits"></a>

```csharp
public string[] RandomizationUnits { get; }
```

- *Type:* string[]

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-launchdarkly.metric.Metric.property.selector"></a>

```csharp
public string Selector { get; }
```

- *Type:* string

---

##### `SuccessCriteria`<sup>Required</sup> <a name="SuccessCriteria" id="@cdktf/provider-launchdarkly.metric.Metric.property.successCriteria"></a>

```csharp
public string SuccessCriteria { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.metric.Metric.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-launchdarkly.metric.Metric.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.metric.Metric.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MetricConfig <a name="MetricConfig" id="@cdktf/provider-launchdarkly.metric.MetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.metric.MetricConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new MetricConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Key,
    string Kind,
    string Name,
    string ProjectKey,
    string Description = null,
    string EventKey = null,
    string Id = null,
    object IsActive = null,
    object IsNumeric = null,
    string MaintainerId = null,
    string[] RandomizationUnits = null,
    string Selector = null,
    string SuccessCriteria = null,
    string[] Tags = null,
    string Unit = null,
    object Urls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.key">Key</a></code> | <code>string</code> | A unique key that will be used to reference the metric in your code. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.kind">Kind</a></code> | <code>string</code> | The metric type -available choices are 'pageview', 'click', and 'custom'. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.name">Name</a></code> | <code>string</code> | A human-readable name for your metric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.projectKey">ProjectKey</a></code> | <code>string</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.description">Description</a></code> | <code>string</code> | A short description of what the metric will be used for. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.eventKey">EventKey</a></code> | <code>string</code> | The event key for your metric (if custom metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#id Metric#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.isActive">IsActive</a></code> | <code>object</code> | Whether the metric is active. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.isNumeric">IsNumeric</a></code> | <code>object</code> | Whether the metric is numeric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.maintainerId">MaintainerId</a></code> | <code>string</code> | The LaunchDarkly ID of the user who will maintain the metric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.randomizationUnits">RandomizationUnits</a></code> | <code>string[]</code> | A set of one or more context kinds that this metric can measure events from. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.selector">Selector</a></code> | <code>string</code> | The CSS selector for your metric (if click metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.successCriteria">SuccessCriteria</a></code> | <code>string</code> | The success criteria for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.tags">Tags</a></code> | <code>string[]</code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.unit">Unit</a></code> | <code>string</code> | The unit for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.urls">Urls</a></code> | <code>object</code> | urls block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key that will be used to reference the metric in your code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#key Metric#key}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

The metric type -available choices are 'pageview', 'click', and 'custom'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#kind Metric#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A human-readable name for your metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#name Metric#name}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#project_key Metric#project_key}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A short description of what the metric will be used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#description Metric#description}

---

##### `EventKey`<sup>Optional</sup> <a name="EventKey" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.eventKey"></a>

```csharp
public string EventKey { get; set; }
```

- *Type:* string

The event key for your metric (if custom metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#event_key Metric#event_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#id Metric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.isActive"></a>

```csharp
public object IsActive { get; set; }
```

- *Type:* object

Whether the metric is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#is_active Metric#is_active}

---

##### `IsNumeric`<sup>Optional</sup> <a name="IsNumeric" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.isNumeric"></a>

```csharp
public object IsNumeric { get; set; }
```

- *Type:* object

Whether the metric is numeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#is_numeric Metric#is_numeric}

---

##### `MaintainerId`<sup>Optional</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.maintainerId"></a>

```csharp
public string MaintainerId { get; set; }
```

- *Type:* string

The LaunchDarkly ID of the user who will maintain the metric.

If not set, the API will automatically apply the member associated with your Terraform API key or the most recently-set maintainer

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#maintainer_id Metric#maintainer_id}

---

##### `RandomizationUnits`<sup>Optional</sup> <a name="RandomizationUnits" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.randomizationUnits"></a>

```csharp
public string[] RandomizationUnits { get; set; }
```

- *Type:* string[]

A set of one or more context kinds that this metric can measure events from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#randomization_units Metric#randomization_units}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.selector"></a>

```csharp
public string Selector { get; set; }
```

- *Type:* string

The CSS selector for your metric (if click metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#selector Metric#selector}

---

##### `SuccessCriteria`<sup>Optional</sup> <a name="SuccessCriteria" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.successCriteria"></a>

```csharp
public string SuccessCriteria { get; set; }
```

- *Type:* string

The success criteria for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#success_criteria Metric#success_criteria}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#tags Metric#tags}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The unit for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#unit Metric#unit}

---

##### `Urls`<sup>Optional</sup> <a name="Urls" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.urls"></a>

```csharp
public object Urls { get; set; }
```

- *Type:* object

urls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#urls Metric#urls}

---

### MetricUrls <a name="MetricUrls" id="@cdktf/provider-launchdarkly.metric.MetricUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.metric.MetricUrls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new MetricUrls {
    string Kind,
    string Pattern = null,
    string Substring = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.kind">Kind</a></code> | <code>string</code> | The url type - available choices are 'exact', 'canonical', 'substring' and 'regex'. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.pattern">Pattern</a></code> | <code>string</code> | The URL-matching regex. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.substring">Substring</a></code> | <code>string</code> | The URL substring. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.url">Url</a></code> | <code>string</code> | The exact or canonical URL. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

The url type - available choices are 'exact', 'canonical', 'substring' and 'regex'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#kind Metric#kind}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The URL-matching regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#pattern Metric#pattern}

---

##### `Substring`<sup>Optional</sup> <a name="Substring" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.substring"></a>

```csharp
public string Substring { get; set; }
```

- *Type:* string

The URL substring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#substring Metric#substring}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The exact or canonical URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/resources/metric#url Metric#url}

---

## Classes <a name="Classes" id="Classes"></a>

### MetricUrlsList <a name="MetricUrlsList" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new MetricUrlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.get"></a>

```csharp
private MetricUrlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MetricUrlsOutputReference <a name="MetricUrlsOutputReference" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new MetricUrlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetSubstring">ResetSubstring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetPattern"></a>

```csharp
private void ResetPattern()
```

##### `ResetSubstring` <a name="ResetSubstring" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetSubstring"></a>

```csharp
private void ResetSubstring()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substringInput">SubstringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substring">Substring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `SubstringInput`<sup>Optional</sup> <a name="SubstringInput" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substringInput"></a>

```csharp
public string SubstringInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Substring`<sup>Required</sup> <a name="Substring" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substring"></a>

```csharp
public string Substring { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



