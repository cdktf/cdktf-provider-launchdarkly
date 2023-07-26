# `data_launchdarkly_environment`

Refer to the Terraform Registory for docs: [`data_launchdarkly_environment`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment).

# `dataLaunchdarklyEnvironment` Submodule <a name="`dataLaunchdarklyEnvironment` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyEnvironment <a name="DataLaunchdarklyEnvironment" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment launchdarkly_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyEnvironment(Construct Scope, string Id, DataLaunchdarklyEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig">DataLaunchdarklyEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig">DataLaunchdarklyEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.putApprovalSettings">PutApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetApprovalSettings">ResetApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetConfirmChanges">ResetConfirmChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetDefaultTrackEvents">ResetDefaultTrackEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetRequireComments">ResetRequireComments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetSecureMode">ResetSecureMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutApprovalSettings` <a name="PutApprovalSettings" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.putApprovalSettings"></a>

```csharp
private void PutApprovalSettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.putApprovalSettings.parameter.value"></a>

- *Type:* object

---

##### `ResetApprovalSettings` <a name="ResetApprovalSettings" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetApprovalSettings"></a>

```csharp
private void ResetApprovalSettings()
```

##### `ResetConfirmChanges` <a name="ResetConfirmChanges" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetConfirmChanges"></a>

```csharp
private void ResetConfirmChanges()
```

##### `ResetDefaultTrackEvents` <a name="ResetDefaultTrackEvents" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetDefaultTrackEvents"></a>

```csharp
private void ResetDefaultTrackEvents()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetDefaultTtl"></a>

```csharp
private void ResetDefaultTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRequireComments` <a name="ResetRequireComments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetRequireComments"></a>

```csharp
private void ResetRequireComments()
```

##### `ResetSecureMode` <a name="ResetSecureMode" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetSecureMode"></a>

```csharp
private void ResetSecureMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyEnvironment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.approvalSettings">ApprovalSettings</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList">DataLaunchdarklyEnvironmentApprovalSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.clientSideId">ClientSideId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.color">Color</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.mobileKey">MobileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.approvalSettingsInput">ApprovalSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.confirmChangesInput">ConfirmChangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTrackEventsInput">DefaultTrackEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.requireCommentsInput">RequireCommentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.secureModeInput">SecureModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.confirmChanges">ConfirmChanges</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTrackEvents">DefaultTrackEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.requireComments">RequireComments</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.secureMode">SecureMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApprovalSettings`<sup>Required</sup> <a name="ApprovalSettings" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.approvalSettings"></a>

```csharp
public DataLaunchdarklyEnvironmentApprovalSettingsList ApprovalSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList">DataLaunchdarklyEnvironmentApprovalSettingsList</a>

---

##### `ClientSideId`<sup>Required</sup> <a name="ClientSideId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.clientSideId"></a>

```csharp
public string ClientSideId { get; }
```

- *Type:* string

---

##### `Color`<sup>Required</sup> <a name="Color" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.color"></a>

```csharp
public string Color { get; }
```

- *Type:* string

---

##### `MobileKey`<sup>Required</sup> <a name="MobileKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.mobileKey"></a>

```csharp
public string MobileKey { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ApprovalSettingsInput`<sup>Optional</sup> <a name="ApprovalSettingsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.approvalSettingsInput"></a>

```csharp
public object ApprovalSettingsInput { get; }
```

- *Type:* object

---

##### `ConfirmChangesInput`<sup>Optional</sup> <a name="ConfirmChangesInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.confirmChangesInput"></a>

```csharp
public object ConfirmChangesInput { get; }
```

- *Type:* object

---

##### `DefaultTrackEventsInput`<sup>Optional</sup> <a name="DefaultTrackEventsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTrackEventsInput"></a>

```csharp
public object DefaultTrackEventsInput { get; }
```

- *Type:* object

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTtlInput"></a>

```csharp
public double DefaultTtlInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `RequireCommentsInput`<sup>Optional</sup> <a name="RequireCommentsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.requireCommentsInput"></a>

```csharp
public object RequireCommentsInput { get; }
```

- *Type:* object

---

##### `SecureModeInput`<sup>Optional</sup> <a name="SecureModeInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.secureModeInput"></a>

```csharp
public object SecureModeInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `ConfirmChanges`<sup>Required</sup> <a name="ConfirmChanges" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.confirmChanges"></a>

```csharp
public object ConfirmChanges { get; }
```

- *Type:* object

---

##### `DefaultTrackEvents`<sup>Required</sup> <a name="DefaultTrackEvents" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTrackEvents"></a>

```csharp
public object DefaultTrackEvents { get; }
```

- *Type:* object

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `RequireComments`<sup>Required</sup> <a name="RequireComments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.requireComments"></a>

```csharp
public object RequireComments { get; }
```

- *Type:* object

---

##### `SecureMode`<sup>Required</sup> <a name="SecureMode" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.secureMode"></a>

```csharp
public object SecureMode { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyEnvironmentApprovalSettings <a name="DataLaunchdarklyEnvironmentApprovalSettings" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyEnvironmentApprovalSettings {
    object CanApplyDeclinedChanges = null,
    object CanReviewOwnRequest = null,
    double MinNumApprovals = null,
    object Required = null,
    string[] RequiredApprovalTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.canApplyDeclinedChanges">CanApplyDeclinedChanges</a></code> | <code>object</code> | Whether changes can be applied as long as minNumApprovals is met, regardless of whether any reviewers have declined a request. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.canReviewOwnRequest">CanReviewOwnRequest</a></code> | <code>object</code> | Whether requesters can approve or decline their own request. They may always comment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.minNumApprovals">MinNumApprovals</a></code> | <code>double</code> | The number of approvals required before an approval request can be applied. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.required">Required</a></code> | <code>object</code> | Whether any changes to flags in this environment will require approval. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.requiredApprovalTags">RequiredApprovalTags</a></code> | <code>string[]</code> | An array of tags used to specify which flags with those tags require approval. |

---

##### `CanApplyDeclinedChanges`<sup>Optional</sup> <a name="CanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.canApplyDeclinedChanges"></a>

```csharp
public object CanApplyDeclinedChanges { get; set; }
```

- *Type:* object

Whether changes can be applied as long as minNumApprovals is met, regardless of whether any reviewers have declined a request.

Defaults to true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#can_apply_declined_changes DataLaunchdarklyEnvironment#can_apply_declined_changes}

---

##### `CanReviewOwnRequest`<sup>Optional</sup> <a name="CanReviewOwnRequest" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.canReviewOwnRequest"></a>

```csharp
public object CanReviewOwnRequest { get; set; }
```

- *Type:* object

Whether requesters can approve or decline their own request. They may always comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#can_review_own_request DataLaunchdarklyEnvironment#can_review_own_request}

---

##### `MinNumApprovals`<sup>Optional</sup> <a name="MinNumApprovals" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.minNumApprovals"></a>

```csharp
public double MinNumApprovals { get; set; }
```

- *Type:* double

The number of approvals required before an approval request can be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#min_num_approvals DataLaunchdarklyEnvironment#min_num_approvals}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

Whether any changes to flags in this environment will require approval.

You may only set required or requiredApprovalTags, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#required DataLaunchdarklyEnvironment#required}

---

##### `RequiredApprovalTags`<sup>Optional</sup> <a name="RequiredApprovalTags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.requiredApprovalTags"></a>

```csharp
public string[] RequiredApprovalTags { get; set; }
```

- *Type:* string[]

An array of tags used to specify which flags with those tags require approval.

You may only set requiredApprovalTags or required, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#required_approval_tags DataLaunchdarklyEnvironment#required_approval_tags}

---

### DataLaunchdarklyEnvironmentConfig <a name="DataLaunchdarklyEnvironmentConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Key,
    string ProjectKey,
    object ApprovalSettings = null,
    object ConfirmChanges = null,
    object DefaultTrackEvents = null,
    double DefaultTtl = null,
    string Id = null,
    object RequireComments = null,
    object SecureMode = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.key">Key</a></code> | <code>string</code> | A project-unique key for the new environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.projectKey">ProjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#project_key DataLaunchdarklyEnvironment#project_key}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.approvalSettings">ApprovalSettings</a></code> | <code>object</code> | approval_settings block. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.confirmChanges">ConfirmChanges</a></code> | <code>object</code> | Whether or not to require confirmation for flag and segment changes in this environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.defaultTrackEvents">DefaultTrackEvents</a></code> | <code>object</code> | Whether or not to default to sending data export events for flags created in the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | The TTL for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#id DataLaunchdarklyEnvironment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.requireComments">RequireComments</a></code> | <code>object</code> | Whether or not to require comments for flag and segment changes in this environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.secureMode">SecureMode</a></code> | <code>object</code> | Whether or not to use secure mode. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.tags">Tags</a></code> | <code>string[]</code> | Tags associated with your resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A project-unique key for the new environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#key DataLaunchdarklyEnvironment#key}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#project_key DataLaunchdarklyEnvironment#project_key}.

---

##### `ApprovalSettings`<sup>Optional</sup> <a name="ApprovalSettings" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.approvalSettings"></a>

```csharp
public object ApprovalSettings { get; set; }
```

- *Type:* object

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#approval_settings DataLaunchdarklyEnvironment#approval_settings}

---

##### `ConfirmChanges`<sup>Optional</sup> <a name="ConfirmChanges" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.confirmChanges"></a>

```csharp
public object ConfirmChanges { get; set; }
```

- *Type:* object

Whether or not to require confirmation for flag and segment changes in this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#confirm_changes DataLaunchdarklyEnvironment#confirm_changes}

---

##### `DefaultTrackEvents`<sup>Optional</sup> <a name="DefaultTrackEvents" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.defaultTrackEvents"></a>

```csharp
public object DefaultTrackEvents { get; set; }
```

- *Type:* object

Whether or not to default to sending data export events for flags created in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#default_track_events DataLaunchdarklyEnvironment#default_track_events}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; set; }
```

- *Type:* double

The TTL for the environment.

This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#default_ttl DataLaunchdarklyEnvironment#default_ttl}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#id DataLaunchdarklyEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequireComments`<sup>Optional</sup> <a name="RequireComments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.requireComments"></a>

```csharp
public object RequireComments { get; set; }
```

- *Type:* object

Whether or not to require comments for flag and segment changes in this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#require_comments DataLaunchdarklyEnvironment#require_comments}

---

##### `SecureMode`<sup>Optional</sup> <a name="SecureMode" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.secureMode"></a>

```csharp
public object SecureMode { get; set; }
```

- *Type:* object

Whether or not to use secure mode.

Secure mode ensures a user of the client-side SDK cannot impersonate another user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#secure_mode DataLaunchdarklyEnvironment#secure_mode}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/environment#tags DataLaunchdarklyEnvironment#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyEnvironmentApprovalSettingsList <a name="DataLaunchdarklyEnvironmentApprovalSettingsList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyEnvironmentApprovalSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.get"></a>

```csharp
private DataLaunchdarklyEnvironmentApprovalSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataLaunchdarklyEnvironmentApprovalSettingsOutputReference <a name="DataLaunchdarklyEnvironmentApprovalSettingsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyEnvironmentApprovalSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetCanApplyDeclinedChanges">ResetCanApplyDeclinedChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetCanReviewOwnRequest">ResetCanReviewOwnRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetMinNumApprovals">ResetMinNumApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetRequiredApprovalTags">ResetRequiredApprovalTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCanApplyDeclinedChanges` <a name="ResetCanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetCanApplyDeclinedChanges"></a>

```csharp
private void ResetCanApplyDeclinedChanges()
```

##### `ResetCanReviewOwnRequest` <a name="ResetCanReviewOwnRequest" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetCanReviewOwnRequest"></a>

```csharp
private void ResetCanReviewOwnRequest()
```

##### `ResetMinNumApprovals` <a name="ResetMinNumApprovals" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetMinNumApprovals"></a>

```csharp
private void ResetMinNumApprovals()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetRequiredApprovalTags` <a name="ResetRequiredApprovalTags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetRequiredApprovalTags"></a>

```csharp
private void ResetRequiredApprovalTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput">CanApplyDeclinedChangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequestInput">CanReviewOwnRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.minNumApprovalsInput">MinNumApprovalsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.requiredApprovalTagsInput">RequiredApprovalTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChanges">CanApplyDeclinedChanges</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequest">CanReviewOwnRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.minNumApprovals">MinNumApprovals</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.requiredApprovalTags">RequiredApprovalTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CanApplyDeclinedChangesInput`<sup>Optional</sup> <a name="CanApplyDeclinedChangesInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput"></a>

```csharp
public object CanApplyDeclinedChangesInput { get; }
```

- *Type:* object

---

##### `CanReviewOwnRequestInput`<sup>Optional</sup> <a name="CanReviewOwnRequestInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequestInput"></a>

```csharp
public object CanReviewOwnRequestInput { get; }
```

- *Type:* object

---

##### `MinNumApprovalsInput`<sup>Optional</sup> <a name="MinNumApprovalsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.minNumApprovalsInput"></a>

```csharp
public double MinNumApprovalsInput { get; }
```

- *Type:* double

---

##### `RequiredApprovalTagsInput`<sup>Optional</sup> <a name="RequiredApprovalTagsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.requiredApprovalTagsInput"></a>

```csharp
public string[] RequiredApprovalTagsInput { get; }
```

- *Type:* string[]

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `CanApplyDeclinedChanges`<sup>Required</sup> <a name="CanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChanges"></a>

```csharp
public object CanApplyDeclinedChanges { get; }
```

- *Type:* object

---

##### `CanReviewOwnRequest`<sup>Required</sup> <a name="CanReviewOwnRequest" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequest"></a>

```csharp
public object CanReviewOwnRequest { get; }
```

- *Type:* object

---

##### `MinNumApprovals`<sup>Required</sup> <a name="MinNumApprovals" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.minNumApprovals"></a>

```csharp
public double MinNumApprovals { get; }
```

- *Type:* double

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `RequiredApprovalTags`<sup>Required</sup> <a name="RequiredApprovalTags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.requiredApprovalTags"></a>

```csharp
public string[] RequiredApprovalTags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



