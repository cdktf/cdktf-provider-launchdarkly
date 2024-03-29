# `dataLaunchdarklyMetric` Submodule <a name="`dataLaunchdarklyMetric` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyMetric <a name="DataLaunchdarklyMetric" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric launchdarkly_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyMetric(Construct Scope, string Id, DataLaunchdarklyMetricConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig">DataLaunchdarklyMetricConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig">DataLaunchdarklyMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.putUrls">PutUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetEventKey">ResetEventKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetIsActive">ResetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetIsNumeric">ResetIsNumeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetMaintainerId">ResetMaintainerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetRandomizationUnits">ResetRandomizationUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetSuccessCriteria">ResetSuccessCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetUrls">ResetUrls</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutUrls` <a name="PutUrls" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.putUrls"></a>

```csharp
private void PutUrls(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.putUrls.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEventKey` <a name="ResetEventKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetEventKey"></a>

```csharp
private void ResetEventKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsActive` <a name="ResetIsActive" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetIsActive"></a>

```csharp
private void ResetIsActive()
```

##### `ResetIsNumeric` <a name="ResetIsNumeric" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetIsNumeric"></a>

```csharp
private void ResetIsNumeric()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetMaintainerId` <a name="ResetMaintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetMaintainerId"></a>

```csharp
private void ResetMaintainerId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRandomizationUnits` <a name="ResetRandomizationUnits" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetRandomizationUnits"></a>

```csharp
private void ResetRandomizationUnits()
```

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetSelector"></a>

```csharp
private void ResetSelector()
```

##### `ResetSuccessCriteria` <a name="ResetSuccessCriteria" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetSuccessCriteria"></a>

```csharp
private void ResetSuccessCriteria()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetUnit"></a>

```csharp
private void ResetUnit()
```

##### `ResetUrls` <a name="ResetUrls" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.resetUrls"></a>

```csharp
private void ResetUrls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataLaunchdarklyMetric resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyMetric.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyMetric.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyMetric.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyMetric.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataLaunchdarklyMetric resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLaunchdarklyMetric to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLaunchdarklyMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataLaunchdarklyMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.urls">Urls</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList">DataLaunchdarklyMetricUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.eventKeyInput">EventKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isActiveInput">IsActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isNumericInput">IsNumericInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.maintainerIdInput">MaintainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.randomizationUnitsInput">RandomizationUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.selectorInput">SelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.successCriteriaInput">SuccessCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.urlsInput">UrlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.eventKey">EventKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isActive">IsActive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isNumeric">IsNumeric</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.maintainerId">MaintainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.randomizationUnits">RandomizationUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.selector">Selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.successCriteria">SuccessCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.unit">Unit</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.urls"></a>

```csharp
public DataLaunchdarklyMetricUrlsList Urls { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList">DataLaunchdarklyMetricUrlsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventKeyInput`<sup>Optional</sup> <a name="EventKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.eventKeyInput"></a>

```csharp
public string EventKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isActiveInput"></a>

```csharp
public object IsActiveInput { get; }
```

- *Type:* object

---

##### `IsNumericInput`<sup>Optional</sup> <a name="IsNumericInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isNumericInput"></a>

```csharp
public object IsNumericInput { get; }
```

- *Type:* object

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `MaintainerIdInput`<sup>Optional</sup> <a name="MaintainerIdInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.maintainerIdInput"></a>

```csharp
public string MaintainerIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `RandomizationUnitsInput`<sup>Optional</sup> <a name="RandomizationUnitsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.randomizationUnitsInput"></a>

```csharp
public string[] RandomizationUnitsInput { get; }
```

- *Type:* string[]

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.selectorInput"></a>

```csharp
public string SelectorInput { get; }
```

- *Type:* string

---

##### `SuccessCriteriaInput`<sup>Optional</sup> <a name="SuccessCriteriaInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.successCriteriaInput"></a>

```csharp
public string SuccessCriteriaInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `UrlsInput`<sup>Optional</sup> <a name="UrlsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.urlsInput"></a>

```csharp
public object UrlsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EventKey`<sup>Required</sup> <a name="EventKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.eventKey"></a>

```csharp
public string EventKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isActive"></a>

```csharp
public object IsActive { get; }
```

- *Type:* object

---

##### `IsNumeric`<sup>Required</sup> <a name="IsNumeric" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.isNumeric"></a>

```csharp
public object IsNumeric { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `MaintainerId`<sup>Required</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.maintainerId"></a>

```csharp
public string MaintainerId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `RandomizationUnits`<sup>Required</sup> <a name="RandomizationUnits" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.randomizationUnits"></a>

```csharp
public string[] RandomizationUnits { get; }
```

- *Type:* string[]

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.selector"></a>

```csharp
public string Selector { get; }
```

- *Type:* string

---

##### `SuccessCriteria`<sup>Required</sup> <a name="SuccessCriteria" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.successCriteria"></a>

```csharp
public string SuccessCriteria { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetric.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyMetricConfig <a name="DataLaunchdarklyMetricConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyMetricConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Key,
    string ProjectKey,
    string Description = null,
    string EventKey = null,
    string Id = null,
    object IsActive = null,
    object IsNumeric = null,
    string Kind = null,
    string MaintainerId = null,
    string Name = null,
    string[] RandomizationUnits = null,
    string Selector = null,
    string SuccessCriteria = null,
    string Unit = null,
    object Urls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.key">Key</a></code> | <code>string</code> | A unique key that will be used to reference the metric in your code. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.projectKey">ProjectKey</a></code> | <code>string</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.description">Description</a></code> | <code>string</code> | A short description of what the metric will be used for. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.eventKey">EventKey</a></code> | <code>string</code> | The event key for your metric (if custom metric). |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#id DataLaunchdarklyMetric#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.isActive">IsActive</a></code> | <code>object</code> | Whether the metric is active. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.isNumeric">IsNumeric</a></code> | <code>object</code> | Whether the metric is numeric. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.kind">Kind</a></code> | <code>string</code> | The metric type -available choices are 'pageview', 'click', and 'custom'. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.maintainerId">MaintainerId</a></code> | <code>string</code> | The LaunchDarkly ID of the user who will maintain the metric. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.name">Name</a></code> | <code>string</code> | A human-readable name for your metric. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.randomizationUnits">RandomizationUnits</a></code> | <code>string[]</code> | A set of one or more context kinds that this metric can measure events from. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.selector">Selector</a></code> | <code>string</code> | The CSS selector for your metric (if click metric). |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.successCriteria">SuccessCriteria</a></code> | <code>string</code> | The success criteria for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.unit">Unit</a></code> | <code>string</code> | The unit for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.urls">Urls</a></code> | <code>object</code> | urls block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key that will be used to reference the metric in your code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#key DataLaunchdarklyMetric#key}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#project_key DataLaunchdarklyMetric#project_key}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A short description of what the metric will be used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#description DataLaunchdarklyMetric#description}

---

##### `EventKey`<sup>Optional</sup> <a name="EventKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.eventKey"></a>

```csharp
public string EventKey { get; set; }
```

- *Type:* string

The event key for your metric (if custom metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#event_key DataLaunchdarklyMetric#event_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#id DataLaunchdarklyMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.isActive"></a>

```csharp
public object IsActive { get; set; }
```

- *Type:* object

Whether the metric is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#is_active DataLaunchdarklyMetric#is_active}

---

##### `IsNumeric`<sup>Optional</sup> <a name="IsNumeric" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.isNumeric"></a>

```csharp
public object IsNumeric { get; set; }
```

- *Type:* object

Whether the metric is numeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#is_numeric DataLaunchdarklyMetric#is_numeric}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

The metric type -available choices are 'pageview', 'click', and 'custom'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#kind DataLaunchdarklyMetric#kind}

---

##### `MaintainerId`<sup>Optional</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.maintainerId"></a>

```csharp
public string MaintainerId { get; set; }
```

- *Type:* string

The LaunchDarkly ID of the user who will maintain the metric.

If not set, the API will automatically apply the member associated with your Terraform API key or the most recently-set maintainer

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#maintainer_id DataLaunchdarklyMetric#maintainer_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A human-readable name for your metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#name DataLaunchdarklyMetric#name}

---

##### `RandomizationUnits`<sup>Optional</sup> <a name="RandomizationUnits" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.randomizationUnits"></a>

```csharp
public string[] RandomizationUnits { get; set; }
```

- *Type:* string[]

A set of one or more context kinds that this metric can measure events from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#randomization_units DataLaunchdarklyMetric#randomization_units}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.selector"></a>

```csharp
public string Selector { get; set; }
```

- *Type:* string

The CSS selector for your metric (if click metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#selector DataLaunchdarklyMetric#selector}

---

##### `SuccessCriteria`<sup>Optional</sup> <a name="SuccessCriteria" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.successCriteria"></a>

```csharp
public string SuccessCriteria { get; set; }
```

- *Type:* string

The success criteria for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#success_criteria DataLaunchdarklyMetric#success_criteria}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The unit for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#unit DataLaunchdarklyMetric#unit}

---

##### `Urls`<sup>Optional</sup> <a name="Urls" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricConfig.property.urls"></a>

```csharp
public object Urls { get; set; }
```

- *Type:* object

urls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#urls DataLaunchdarklyMetric#urls}

---

### DataLaunchdarklyMetricUrls <a name="DataLaunchdarklyMetricUrls" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyMetricUrls {
    string Kind,
    string Pattern = null,
    string Substring = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.kind">Kind</a></code> | <code>string</code> | The url type - available choices are 'exact', 'canonical', 'substring' and 'regex'. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.pattern">Pattern</a></code> | <code>string</code> | The URL-matching regex. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.substring">Substring</a></code> | <code>string</code> | The URL substring. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.url">Url</a></code> | <code>string</code> | The exact or canonical URL. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

The url type - available choices are 'exact', 'canonical', 'substring' and 'regex'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#kind DataLaunchdarklyMetric#kind}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The URL-matching regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#pattern DataLaunchdarklyMetric#pattern}

---

##### `Substring`<sup>Optional</sup> <a name="Substring" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.substring"></a>

```csharp
public string Substring { get; set; }
```

- *Type:* string

The URL substring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#substring DataLaunchdarklyMetric#substring}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrls.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The exact or canonical URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.2/docs/data-sources/metric#url DataLaunchdarklyMetric#url}

---

## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyMetricUrlsList <a name="DataLaunchdarklyMetricUrlsList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyMetricUrlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.get"></a>

```csharp
private DataLaunchdarklyMetricUrlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLaunchdarklyMetricUrlsOutputReference <a name="DataLaunchdarklyMetricUrlsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyMetricUrlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resetSubstring">ResetSubstring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resetPattern"></a>

```csharp
private void ResetPattern()
```

##### `ResetSubstring` <a name="ResetSubstring" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resetSubstring"></a>

```csharp
private void ResetSubstring()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.substringInput">SubstringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.substring">Substring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `SubstringInput`<sup>Optional</sup> <a name="SubstringInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.substringInput"></a>

```csharp
public string SubstringInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Substring`<sup>Required</sup> <a name="Substring" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.substring"></a>

```csharp
public string Substring { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyMetric.DataLaunchdarklyMetricUrlsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



