# `data_launchdarkly_feature_flag`

Refer to the Terraform Registory for docs: [`data_launchdarkly_feature_flag`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag).

# `dataLaunchdarklyFeatureFlag` Submodule <a name="`dataLaunchdarklyFeatureFlag` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyFeatureFlag <a name="DataLaunchdarklyFeatureFlag" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag launchdarkly_feature_flag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFeatureFlag(Construct Scope, string Id, DataLaunchdarklyFeatureFlagConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig">DataLaunchdarklyFeatureFlagConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig">DataLaunchdarklyFeatureFlagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putClientSideAvailability">PutClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putCustomProperties">PutCustomProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putDefaults">PutDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putVariations">PutVariations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetArchived">ResetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetClientSideAvailability">ResetClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetCustomProperties">ResetCustomProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetDefaults">ResetDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetIncludeInSnippet">ResetIncludeInSnippet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetMaintainerId">ResetMaintainerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetTemporary">ResetTemporary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetVariations">ResetVariations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutClientSideAvailability` <a name="PutClientSideAvailability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putClientSideAvailability"></a>

```csharp
private void PutClientSideAvailability(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putClientSideAvailability.parameter.value"></a>

- *Type:* object

---

##### `PutCustomProperties` <a name="PutCustomProperties" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putCustomProperties"></a>

```csharp
private void PutCustomProperties(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putCustomProperties.parameter.value"></a>

- *Type:* object

---

##### `PutDefaults` <a name="PutDefaults" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putDefaults"></a>

```csharp
private void PutDefaults(DataLaunchdarklyFeatureFlagDefaults Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a>

---

##### `PutVariations` <a name="PutVariations" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putVariations"></a>

```csharp
private void PutVariations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putVariations.parameter.value"></a>

- *Type:* object

---

##### `ResetArchived` <a name="ResetArchived" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetArchived"></a>

```csharp
private void ResetArchived()
```

##### `ResetClientSideAvailability` <a name="ResetClientSideAvailability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetClientSideAvailability"></a>

```csharp
private void ResetClientSideAvailability()
```

##### `ResetCustomProperties` <a name="ResetCustomProperties" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetCustomProperties"></a>

```csharp
private void ResetCustomProperties()
```

##### `ResetDefaults` <a name="ResetDefaults" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetDefaults"></a>

```csharp
private void ResetDefaults()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeInSnippet` <a name="ResetIncludeInSnippet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetIncludeInSnippet"></a>

```csharp
private void ResetIncludeInSnippet()
```

##### `ResetMaintainerId` <a name="ResetMaintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetMaintainerId"></a>

```csharp
private void ResetMaintainerId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemporary` <a name="ResetTemporary" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetTemporary"></a>

```csharp
private void ResetTemporary()
```

##### `ResetVariations` <a name="ResetVariations" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetVariations"></a>

```csharp
private void ResetVariations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyFeatureFlag.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyFeatureFlag.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyFeatureFlag.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.clientSideAvailability">ClientSideAvailability</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList">DataLaunchdarklyFeatureFlagClientSideAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.customProperties">CustomProperties</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList">DataLaunchdarklyFeatureFlagCustomPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.defaults">Defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference">DataLaunchdarklyFeatureFlagDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.variations">Variations</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList">DataLaunchdarklyFeatureFlagVariationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.variationType">VariationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.archivedInput">ArchivedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.clientSideAvailabilityInput">ClientSideAvailabilityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.customPropertiesInput">CustomPropertiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.defaultsInput">DefaultsInput</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.includeInSnippetInput">IncludeInSnippetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.maintainerIdInput">MaintainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.temporaryInput">TemporaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.variationsInput">VariationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.archived">Archived</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.includeInSnippet">IncludeInSnippet</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.maintainerId">MaintainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.temporary">Temporary</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ClientSideAvailability`<sup>Required</sup> <a name="ClientSideAvailability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.clientSideAvailability"></a>

```csharp
public DataLaunchdarklyFeatureFlagClientSideAvailabilityList ClientSideAvailability { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList">DataLaunchdarklyFeatureFlagClientSideAvailabilityList</a>

---

##### `CustomProperties`<sup>Required</sup> <a name="CustomProperties" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.customProperties"></a>

```csharp
public DataLaunchdarklyFeatureFlagCustomPropertiesList CustomProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList">DataLaunchdarklyFeatureFlagCustomPropertiesList</a>

---

##### `Defaults`<sup>Required</sup> <a name="Defaults" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.defaults"></a>

```csharp
public DataLaunchdarklyFeatureFlagDefaultsOutputReference Defaults { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference">DataLaunchdarklyFeatureFlagDefaultsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Variations`<sup>Required</sup> <a name="Variations" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.variations"></a>

```csharp
public DataLaunchdarklyFeatureFlagVariationsList Variations { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList">DataLaunchdarklyFeatureFlagVariationsList</a>

---

##### `VariationType`<sup>Required</sup> <a name="VariationType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.variationType"></a>

```csharp
public string VariationType { get; }
```

- *Type:* string

---

##### `ArchivedInput`<sup>Optional</sup> <a name="ArchivedInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.archivedInput"></a>

```csharp
public object ArchivedInput { get; }
```

- *Type:* object

---

##### `ClientSideAvailabilityInput`<sup>Optional</sup> <a name="ClientSideAvailabilityInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.clientSideAvailabilityInput"></a>

```csharp
public object ClientSideAvailabilityInput { get; }
```

- *Type:* object

---

##### `CustomPropertiesInput`<sup>Optional</sup> <a name="CustomPropertiesInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.customPropertiesInput"></a>

```csharp
public object CustomPropertiesInput { get; }
```

- *Type:* object

---

##### `DefaultsInput`<sup>Optional</sup> <a name="DefaultsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.defaultsInput"></a>

```csharp
public DataLaunchdarklyFeatureFlagDefaults DefaultsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeInSnippetInput`<sup>Optional</sup> <a name="IncludeInSnippetInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.includeInSnippetInput"></a>

```csharp
public object IncludeInSnippetInput { get; }
```

- *Type:* object

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MaintainerIdInput`<sup>Optional</sup> <a name="MaintainerIdInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.maintainerIdInput"></a>

```csharp
public string MaintainerIdInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TemporaryInput`<sup>Optional</sup> <a name="TemporaryInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.temporaryInput"></a>

```csharp
public object TemporaryInput { get; }
```

- *Type:* object

---

##### `VariationsInput`<sup>Optional</sup> <a name="VariationsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.variationsInput"></a>

```csharp
public object VariationsInput { get; }
```

- *Type:* object

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.archived"></a>

```csharp
public object Archived { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeInSnippet`<sup>Required</sup> <a name="IncludeInSnippet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.includeInSnippet"></a>

```csharp
public object IncludeInSnippet { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MaintainerId`<sup>Required</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.maintainerId"></a>

```csharp
public string MaintainerId { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Temporary`<sup>Required</sup> <a name="Temporary" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.temporary"></a>

```csharp
public object Temporary { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyFeatureFlagClientSideAvailability <a name="DataLaunchdarklyFeatureFlagClientSideAvailability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFeatureFlagClientSideAvailability {
    object UsingEnvironmentId = null,
    object UsingMobileKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability.property.usingEnvironmentId">UsingEnvironmentId</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#using_environment_id DataLaunchdarklyFeatureFlag#using_environment_id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability.property.usingMobileKey">UsingMobileKey</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#using_mobile_key DataLaunchdarklyFeatureFlag#using_mobile_key}. |

---

##### `UsingEnvironmentId`<sup>Optional</sup> <a name="UsingEnvironmentId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability.property.usingEnvironmentId"></a>

```csharp
public object UsingEnvironmentId { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#using_environment_id DataLaunchdarklyFeatureFlag#using_environment_id}.

---

##### `UsingMobileKey`<sup>Optional</sup> <a name="UsingMobileKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability.property.usingMobileKey"></a>

```csharp
public object UsingMobileKey { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#using_mobile_key DataLaunchdarklyFeatureFlag#using_mobile_key}.

---

### DataLaunchdarklyFeatureFlagConfig <a name="DataLaunchdarklyFeatureFlagConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFeatureFlagConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Key,
    string ProjectKey,
    object Archived = null,
    object ClientSideAvailability = null,
    object CustomProperties = null,
    DataLaunchdarklyFeatureFlagDefaults Defaults = null,
    string Description = null,
    string Id = null,
    object IncludeInSnippet = null,
    string MaintainerId = null,
    string[] Tags = null,
    object Temporary = null,
    object Variations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.key">Key</a></code> | <code>string</code> | A unique key that will be used to reference the flag in your code. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.projectKey">ProjectKey</a></code> | <code>string</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.archived">Archived</a></code> | <code>object</code> | Whether to archive the flag. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.clientSideAvailability">ClientSideAvailability</a></code> | <code>object</code> | client_side_availability block. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.customProperties">CustomProperties</a></code> | <code>object</code> | custom_properties block. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.defaults">Defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a></code> | defaults block. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.description">Description</a></code> | <code>string</code> | A short description of what the flag will be used for. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#id DataLaunchdarklyFeatureFlag#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.includeInSnippet">IncludeInSnippet</a></code> | <code>object</code> | Whether or not this flag should be made available to the client-side JavaScript SDK. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.maintainerId">MaintainerId</a></code> | <code>string</code> | The LaunchDarkly id of the user who will maintain the flag. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.tags">Tags</a></code> | <code>string[]</code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.temporary">Temporary</a></code> | <code>object</code> | Whether or not the flag is a temporary flag. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.variations">Variations</a></code> | <code>object</code> | variations block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key that will be used to reference the flag in your code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#key DataLaunchdarklyFeatureFlag#key}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#project_key DataLaunchdarklyFeatureFlag#project_key}

---

##### `Archived`<sup>Optional</sup> <a name="Archived" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.archived"></a>

```csharp
public object Archived { get; set; }
```

- *Type:* object

Whether to archive the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#archived DataLaunchdarklyFeatureFlag#archived}

---

##### `ClientSideAvailability`<sup>Optional</sup> <a name="ClientSideAvailability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.clientSideAvailability"></a>

```csharp
public object ClientSideAvailability { get; set; }
```

- *Type:* object

client_side_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#client_side_availability DataLaunchdarklyFeatureFlag#client_side_availability}

---

##### `CustomProperties`<sup>Optional</sup> <a name="CustomProperties" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.customProperties"></a>

```csharp
public object CustomProperties { get; set; }
```

- *Type:* object

custom_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#custom_properties DataLaunchdarklyFeatureFlag#custom_properties}

---

##### `Defaults`<sup>Optional</sup> <a name="Defaults" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.defaults"></a>

```csharp
public DataLaunchdarklyFeatureFlagDefaults Defaults { get; set; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a>

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#defaults DataLaunchdarklyFeatureFlag#defaults}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A short description of what the flag will be used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#description DataLaunchdarklyFeatureFlag#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#id DataLaunchdarklyFeatureFlag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeInSnippet`<sup>Optional</sup> <a name="IncludeInSnippet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.includeInSnippet"></a>

```csharp
public object IncludeInSnippet { get; set; }
```

- *Type:* object

Whether or not this flag should be made available to the client-side JavaScript SDK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#include_in_snippet DataLaunchdarklyFeatureFlag#include_in_snippet}

---

##### `MaintainerId`<sup>Optional</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.maintainerId"></a>

```csharp
public string MaintainerId { get; set; }
```

- *Type:* string

The LaunchDarkly id of the user who will maintain the flag.

If not set, the API will automatically apply the member associated with your Terraform API key or the most recently set maintainer

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#maintainer_id DataLaunchdarklyFeatureFlag#maintainer_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#tags DataLaunchdarklyFeatureFlag#tags}

---

##### `Temporary`<sup>Optional</sup> <a name="Temporary" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.temporary"></a>

```csharp
public object Temporary { get; set; }
```

- *Type:* object

Whether or not the flag is a temporary flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#temporary DataLaunchdarklyFeatureFlag#temporary}

---

##### `Variations`<sup>Optional</sup> <a name="Variations" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.variations"></a>

```csharp
public object Variations { get; set; }
```

- *Type:* object

variations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#variations DataLaunchdarklyFeatureFlag#variations}

---

### DataLaunchdarklyFeatureFlagCustomProperties <a name="DataLaunchdarklyFeatureFlagCustomProperties" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFeatureFlagCustomProperties {
    string Key,
    string Name,
    string[] Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#key DataLaunchdarklyFeatureFlag#key}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#name DataLaunchdarklyFeatureFlag#name}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.property.value">Value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#value DataLaunchdarklyFeatureFlag#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#key DataLaunchdarklyFeatureFlag#key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#name DataLaunchdarklyFeatureFlag#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.property.value"></a>

```csharp
public string[] Value { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#value DataLaunchdarklyFeatureFlag#value}.

---

### DataLaunchdarklyFeatureFlagDefaults <a name="DataLaunchdarklyFeatureFlagDefaults" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFeatureFlagDefaults {
    double OffVariation,
    double OnVariation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults.property.offVariation">OffVariation</a></code> | <code>double</code> | The index of the variation served when the flag is off for new environments. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults.property.onVariation">OnVariation</a></code> | <code>double</code> | The index of the variation served when the flag is on for new environments. |

---

##### `OffVariation`<sup>Required</sup> <a name="OffVariation" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults.property.offVariation"></a>

```csharp
public double OffVariation { get; set; }
```

- *Type:* double

The index of the variation served when the flag is off for new environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#off_variation DataLaunchdarklyFeatureFlag#off_variation}

---

##### `OnVariation`<sup>Required</sup> <a name="OnVariation" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults.property.onVariation"></a>

```csharp
public double OnVariation { get; set; }
```

- *Type:* double

The index of the variation served when the flag is on for new environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#on_variation DataLaunchdarklyFeatureFlag#on_variation}

---

### DataLaunchdarklyFeatureFlagVariations <a name="DataLaunchdarklyFeatureFlagVariations" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFeatureFlagVariations {
    string Value,
    string Description = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.property.value">Value</a></code> | <code>string</code> | The value of the flag for this variation. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.property.description">Description</a></code> | <code>string</code> | A description for the variation. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.property.name">Name</a></code> | <code>string</code> | A name for the variation. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the flag for this variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#value DataLaunchdarklyFeatureFlag#value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#description DataLaunchdarklyFeatureFlag#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name for the variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#name DataLaunchdarklyFeatureFlag#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyFeatureFlagClientSideAvailabilityList <a name="DataLaunchdarklyFeatureFlagClientSideAvailabilityList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFeatureFlagClientSideAvailabilityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.get"></a>

```csharp
private DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference <a name="DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resetUsingEnvironmentId">ResetUsingEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resetUsingMobileKey">ResetUsingMobileKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUsingEnvironmentId` <a name="ResetUsingEnvironmentId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resetUsingEnvironmentId"></a>

```csharp
private void ResetUsingEnvironmentId()
```

##### `ResetUsingMobileKey` <a name="ResetUsingMobileKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resetUsingMobileKey"></a>

```csharp
private void ResetUsingMobileKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput">UsingEnvironmentIdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput">UsingMobileKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId">UsingEnvironmentId</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey">UsingMobileKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsingEnvironmentIdInput`<sup>Optional</sup> <a name="UsingEnvironmentIdInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput"></a>

```csharp
public object UsingEnvironmentIdInput { get; }
```

- *Type:* object

---

##### `UsingMobileKeyInput`<sup>Optional</sup> <a name="UsingMobileKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput"></a>

```csharp
public object UsingMobileKeyInput { get; }
```

- *Type:* object

---

##### `UsingEnvironmentId`<sup>Required</sup> <a name="UsingEnvironmentId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId"></a>

```csharp
public object UsingEnvironmentId { get; }
```

- *Type:* object

---

##### `UsingMobileKey`<sup>Required</sup> <a name="UsingMobileKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey"></a>

```csharp
public object UsingMobileKey { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLaunchdarklyFeatureFlagCustomPropertiesList <a name="DataLaunchdarklyFeatureFlagCustomPropertiesList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFeatureFlagCustomPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.get"></a>

```csharp
private DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference <a name="DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.valueInput">ValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.value">Value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.valueInput"></a>

```csharp
public string[] ValueInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.value"></a>

```csharp
public string[] Value { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLaunchdarklyFeatureFlagDefaultsOutputReference <a name="DataLaunchdarklyFeatureFlagDefaultsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFeatureFlagDefaultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.offVariationInput">OffVariationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.onVariationInput">OnVariationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.offVariation">OffVariation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.onVariation">OnVariation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OffVariationInput`<sup>Optional</sup> <a name="OffVariationInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.offVariationInput"></a>

```csharp
public double OffVariationInput { get; }
```

- *Type:* double

---

##### `OnVariationInput`<sup>Optional</sup> <a name="OnVariationInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.onVariationInput"></a>

```csharp
public double OnVariationInput { get; }
```

- *Type:* double

---

##### `OffVariation`<sup>Required</sup> <a name="OffVariation" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.offVariation"></a>

```csharp
public double OffVariation { get; }
```

- *Type:* double

---

##### `OnVariation`<sup>Required</sup> <a name="OnVariation" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.onVariation"></a>

```csharp
public double OnVariation { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.internalValue"></a>

```csharp
public DataLaunchdarklyFeatureFlagDefaults InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a>

---


### DataLaunchdarklyFeatureFlagVariationsList <a name="DataLaunchdarklyFeatureFlagVariationsList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFeatureFlagVariationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.get"></a>

```csharp
private DataLaunchdarklyFeatureFlagVariationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLaunchdarklyFeatureFlagVariationsOutputReference <a name="DataLaunchdarklyFeatureFlagVariationsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFeatureFlagVariationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



