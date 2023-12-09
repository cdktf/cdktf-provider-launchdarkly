# `dataLaunchdarklyRelayProxyConfiguration` Submodule <a name="`dataLaunchdarklyRelayProxyConfiguration` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyRelayProxyConfiguration <a name="DataLaunchdarklyRelayProxyConfiguration" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/data-sources/relay_proxy_configuration launchdarkly_relay_proxy_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyRelayProxyConfiguration(Construct Scope, string Id, DataLaunchdarklyRelayProxyConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig">DataLaunchdarklyRelayProxyConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig">DataLaunchdarklyRelayProxyConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataLaunchdarklyRelayProxyConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyRelayProxyConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyRelayProxyConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyRelayProxyConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyRelayProxyConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataLaunchdarklyRelayProxyConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLaunchdarklyRelayProxyConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLaunchdarklyRelayProxyConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/data-sources/relay_proxy_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataLaunchdarklyRelayProxyConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.displayKey">DisplayKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList">DataLaunchdarklyRelayProxyConfigurationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DisplayKey`<sup>Required</sup> <a name="DisplayKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.displayKey"></a>

```csharp
public string DisplayKey { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.policy"></a>

```csharp
public DataLaunchdarklyRelayProxyConfigurationPolicyList Policy { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList">DataLaunchdarklyRelayProxyConfigurationPolicyList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyRelayProxyConfigurationConfig <a name="DataLaunchdarklyRelayProxyConfigurationConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyRelayProxyConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.id">Id</a></code> | <code>string</code> | The Relay Proxy configuration's unique 24 character ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The Relay Proxy configuration's unique 24 character ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/data-sources/relay_proxy_configuration#id DataLaunchdarklyRelayProxyConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataLaunchdarklyRelayProxyConfigurationPolicy <a name="DataLaunchdarklyRelayProxyConfigurationPolicy" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyRelayProxyConfigurationPolicy {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyRelayProxyConfigurationPolicyList <a name="DataLaunchdarklyRelayProxyConfigurationPolicyList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyRelayProxyConfigurationPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.get"></a>

```csharp
private DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference <a name="DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.notActions">NotActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.notResources">NotResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicy">DataLaunchdarklyRelayProxyConfigurationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `NotActions`<sup>Required</sup> <a name="NotActions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.notActions"></a>

```csharp
public string[] NotActions { get; }
```

- *Type:* string[]

---

##### `NotResources`<sup>Required</sup> <a name="NotResources" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.notResources"></a>

```csharp
public string[] NotResources { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicyOutputReference.property.internalValue"></a>

```csharp
public DataLaunchdarklyRelayProxyConfigurationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyRelayProxyConfiguration.DataLaunchdarklyRelayProxyConfigurationPolicy">DataLaunchdarklyRelayProxyConfigurationPolicy</a>

---



