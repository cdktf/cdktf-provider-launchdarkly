# `flagTrigger` Submodule <a name="`flagTrigger` Submodule" id="@cdktf/provider-launchdarkly.flagTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FlagTrigger <a name="FlagTrigger" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/flag_trigger launchdarkly_flag_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FlagTrigger(Construct Scope, string Id, FlagTriggerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig">FlagTriggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig">FlagTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.putInstructions">PutInstructions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstructions` <a name="PutInstructions" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.putInstructions"></a>

```csharp
private void PutInstructions(FlagTriggerInstructions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.putInstructions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructions">FlagTriggerInstructions</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FlagTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

FlagTrigger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

FlagTrigger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

FlagTrigger.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

FlagTrigger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FlagTrigger resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FlagTrigger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FlagTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/flag_trigger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FlagTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.instructions">Instructions</a></code> | <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference">FlagTriggerInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.maintainerId">MaintainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.triggerUrl">TriggerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.envKeyInput">EnvKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.flagKeyInput">FlagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.instructionsInput">InstructionsInput</a></code> | <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructions">FlagTriggerInstructions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.integrationKeyInput">IntegrationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.envKey">EnvKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.flagKey">FlagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.integrationKey">IntegrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.instructions"></a>

```csharp
public FlagTriggerInstructionsOutputReference Instructions { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference">FlagTriggerInstructionsOutputReference</a>

---

##### `MaintainerId`<sup>Required</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.maintainerId"></a>

```csharp
public string MaintainerId { get; }
```

- *Type:* string

---

##### `TriggerUrl`<sup>Required</sup> <a name="TriggerUrl" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.triggerUrl"></a>

```csharp
public string TriggerUrl { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EnvKeyInput`<sup>Optional</sup> <a name="EnvKeyInput" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.envKeyInput"></a>

```csharp
public string EnvKeyInput { get; }
```

- *Type:* string

---

##### `FlagKeyInput`<sup>Optional</sup> <a name="FlagKeyInput" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.flagKeyInput"></a>

```csharp
public string FlagKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstructionsInput`<sup>Optional</sup> <a name="InstructionsInput" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.instructionsInput"></a>

```csharp
public FlagTriggerInstructions InstructionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructions">FlagTriggerInstructions</a>

---

##### `IntegrationKeyInput`<sup>Optional</sup> <a name="IntegrationKeyInput" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.integrationKeyInput"></a>

```csharp
public string IntegrationKeyInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `EnvKey`<sup>Required</sup> <a name="EnvKey" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.envKey"></a>

```csharp
public string EnvKey { get; }
```

- *Type:* string

---

##### `FlagKey`<sup>Required</sup> <a name="FlagKey" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.flagKey"></a>

```csharp
public string FlagKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.integrationKey"></a>

```csharp
public string IntegrationKey { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTrigger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FlagTriggerConfig <a name="FlagTriggerConfig" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FlagTriggerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Enabled,
    string EnvKey,
    string FlagKey,
    FlagTriggerInstructions Instructions,
    string IntegrationKey,
    string ProjectKey,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether the trigger is currently active or not. This property defaults to true upon creation. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.envKey">EnvKey</a></code> | <code>string</code> | The LaunchDarkly environment key. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.flagKey">FlagKey</a></code> | <code>string</code> | The key of the feature flag the trigger acts upon. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.instructions">Instructions</a></code> | <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructions">FlagTriggerInstructions</a></code> | instructions block. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.integrationKey">IntegrationKey</a></code> | <code>string</code> | The unique identifier of the integration you intend to set your trigger up with. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.projectKey">ProjectKey</a></code> | <code>string</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/flag_trigger#id FlagTrigger#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether the trigger is currently active or not. This property defaults to true upon creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/flag_trigger#enabled FlagTrigger#enabled}

---

##### `EnvKey`<sup>Required</sup> <a name="EnvKey" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.envKey"></a>

```csharp
public string EnvKey { get; set; }
```

- *Type:* string

The LaunchDarkly environment key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/flag_trigger#env_key FlagTrigger#env_key}

---

##### `FlagKey`<sup>Required</sup> <a name="FlagKey" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.flagKey"></a>

```csharp
public string FlagKey { get; set; }
```

- *Type:* string

The key of the feature flag the trigger acts upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/flag_trigger#flag_key FlagTrigger#flag_key}

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.instructions"></a>

```csharp
public FlagTriggerInstructions Instructions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructions">FlagTriggerInstructions</a>

instructions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/flag_trigger#instructions FlagTrigger#instructions}

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.integrationKey"></a>

```csharp
public string IntegrationKey { get; set; }
```

- *Type:* string

The unique identifier of the integration you intend to set your trigger up with.

"generic-trigger" should be used for integrations not explicitly supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/flag_trigger#integration_key FlagTrigger#integration_key}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/flag_trigger#project_key FlagTrigger#project_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/flag_trigger#id FlagTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FlagTriggerInstructions <a name="FlagTriggerInstructions" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FlagTriggerInstructions {
    string Kind
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructions.property.kind">Kind</a></code> | <code>string</code> | The action to perform when triggering. Currently supported flag actions are "turnFlagOn" and "turnFlagOff". |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructions.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

The action to perform when triggering. Currently supported flag actions are "turnFlagOn" and "turnFlagOff".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/flag_trigger#kind FlagTrigger#kind}

---

## Classes <a name="Classes" id="Classes"></a>

### FlagTriggerInstructionsOutputReference <a name="FlagTriggerInstructionsOutputReference" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new FlagTriggerInstructionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructions">FlagTriggerInstructions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructionsOutputReference.property.internalValue"></a>

```csharp
public FlagTriggerInstructions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.flagTrigger.FlagTriggerInstructions">FlagTriggerInstructions</a>

---



