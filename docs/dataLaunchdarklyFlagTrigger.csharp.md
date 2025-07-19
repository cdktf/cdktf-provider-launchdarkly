# `dataLaunchdarklyFlagTrigger` Submodule <a name="`dataLaunchdarklyFlagTrigger` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyFlagTrigger <a name="DataLaunchdarklyFlagTrigger" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/flag_trigger launchdarkly_flag_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFlagTrigger(Construct Scope, string Id, DataLaunchdarklyFlagTriggerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig">DataLaunchdarklyFlagTriggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig">DataLaunchdarklyFlagTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataLaunchdarklyFlagTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyFlagTrigger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyFlagTrigger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyFlagTrigger.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

DataLaunchdarklyFlagTrigger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataLaunchdarklyFlagTrigger resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLaunchdarklyFlagTrigger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLaunchdarklyFlagTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/flag_trigger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataLaunchdarklyFlagTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.instructions">Instructions</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList">DataLaunchdarklyFlagTriggerInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.integrationKey">IntegrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.maintainerId">MaintainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.triggerUrl">TriggerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.envKeyInput">EnvKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.flagKeyInput">FlagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.envKey">EnvKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.flagKey">FlagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.instructions"></a>

```csharp
public DataLaunchdarklyFlagTriggerInstructionsList Instructions { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList">DataLaunchdarklyFlagTriggerInstructionsList</a>

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.integrationKey"></a>

```csharp
public string IntegrationKey { get; }
```

- *Type:* string

---

##### `MaintainerId`<sup>Required</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.maintainerId"></a>

```csharp
public string MaintainerId { get; }
```

- *Type:* string

---

##### `TriggerUrl`<sup>Required</sup> <a name="TriggerUrl" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.triggerUrl"></a>

```csharp
public string TriggerUrl { get; }
```

- *Type:* string

---

##### `EnvKeyInput`<sup>Optional</sup> <a name="EnvKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.envKeyInput"></a>

```csharp
public string EnvKeyInput { get; }
```

- *Type:* string

---

##### `FlagKeyInput`<sup>Optional</sup> <a name="FlagKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.flagKeyInput"></a>

```csharp
public string FlagKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `EnvKey`<sup>Required</sup> <a name="EnvKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.envKey"></a>

```csharp
public string EnvKey { get; }
```

- *Type:* string

---

##### `FlagKey`<sup>Required</sup> <a name="FlagKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.flagKey"></a>

```csharp
public string FlagKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTrigger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyFlagTriggerConfig <a name="DataLaunchdarklyFlagTriggerConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFlagTriggerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EnvKey,
    string FlagKey,
    string Id,
    string ProjectKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.envKey">EnvKey</a></code> | <code>string</code> | The unique key of the environment the flag trigger will work in. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.flagKey">FlagKey</a></code> | <code>string</code> | The unique key of the associated flag. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.id">Id</a></code> | <code>string</code> | The Terraform trigger ID. The unique trigger ID can be found in your saved trigger URL:. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.projectKey">ProjectKey</a></code> | <code>string</code> | The unique key of the project encompassing the associated flag. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnvKey`<sup>Required</sup> <a name="EnvKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.envKey"></a>

```csharp
public string EnvKey { get; set; }
```

- *Type:* string

The unique key of the environment the flag trigger will work in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/flag_trigger#env_key DataLaunchdarklyFlagTrigger#env_key}

---

##### `FlagKey`<sup>Required</sup> <a name="FlagKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.flagKey"></a>

```csharp
public string FlagKey { get; set; }
```

- *Type:* string

The unique key of the associated flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/flag_trigger#flag_key DataLaunchdarklyFlagTrigger#flag_key}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The Terraform trigger ID. The unique trigger ID can be found in your saved trigger URL:.

```
https://app.launchdarkly.com/webhook/triggers/THIS_IS_YOUR_TRIGGER_ID/aff25a53-17d9-4112-a9b8-12718d1a2e79
```

Please note that if you did not save this upon creation of the resource, you will have to reset it to get a new value, which can cause breaking changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/flag_trigger#id DataLaunchdarklyFlagTrigger#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerConfig.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

The unique key of the project encompassing the associated flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/flag_trigger#project_key DataLaunchdarklyFlagTrigger#project_key}

---

### DataLaunchdarklyFlagTriggerInstructions <a name="DataLaunchdarklyFlagTriggerInstructions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFlagTriggerInstructions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyFlagTriggerInstructionsList <a name="DataLaunchdarklyFlagTriggerInstructionsList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFlagTriggerInstructionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.get"></a>

```csharp
private DataLaunchdarklyFlagTriggerInstructionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataLaunchdarklyFlagTriggerInstructionsOutputReference <a name="DataLaunchdarklyFlagTriggerInstructionsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new DataLaunchdarklyFlagTriggerInstructionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructions">DataLaunchdarklyFlagTriggerInstructions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructionsOutputReference.property.internalValue"></a>

```csharp
public DataLaunchdarklyFlagTriggerInstructions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFlagTrigger.DataLaunchdarklyFlagTriggerInstructions">DataLaunchdarklyFlagTriggerInstructions</a>

---



