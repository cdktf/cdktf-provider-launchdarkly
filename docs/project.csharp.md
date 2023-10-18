# `launchdarkly_project`

Refer to the Terraform Registory for docs: [`launchdarkly_project`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project).

# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-launchdarkly.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-launchdarkly.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project launchdarkly_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.Project.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new Project(Construct Scope, string Id, ProjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig">ProjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.project.ProjectConfig">ProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.putDefaultClientSideAvailability">PutDefaultClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.putEnvironments">PutEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetDefaultClientSideAvailability">ResetDefaultClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetIncludeInSnippet">ResetIncludeInSnippet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.project.Project.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.project.Project.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-launchdarkly.project.Project.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.project.Project.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.project.Project.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-launchdarkly.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.project.Project.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.project.Project.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.project.Project.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-launchdarkly.project.Project.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-launchdarkly.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.project.Project.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.project.Project.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.project.Project.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.project.Project.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.project.Project.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.project.Project.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-launchdarkly.project.Project.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.project.Project.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.project.Project.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.project.Project.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-launchdarkly.project.Project.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-launchdarkly.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-launchdarkly.project.Project.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutDefaultClientSideAvailability` <a name="PutDefaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.Project.putDefaultClientSideAvailability"></a>

```csharp
private void PutDefaultClientSideAvailability(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.project.Project.putDefaultClientSideAvailability.parameter.value"></a>

- *Type:* object

---

##### `PutEnvironments` <a name="PutEnvironments" id="@cdktf/provider-launchdarkly.project.Project.putEnvironments"></a>

```csharp
private void PutEnvironments(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.project.Project.putEnvironments.parameter.value"></a>

- *Type:* object

---

##### `ResetDefaultClientSideAvailability` <a name="ResetDefaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.Project.resetDefaultClientSideAvailability"></a>

```csharp
private void ResetDefaultClientSideAvailability()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-launchdarkly.project.Project.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeInSnippet` <a name="ResetIncludeInSnippet" id="@cdktf/provider-launchdarkly.project.Project.resetIncludeInSnippet"></a>

```csharp
private void ResetIncludeInSnippet()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-launchdarkly.project.Project.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.project.Project.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

Project.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.project.Project.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.project.Project.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

Project.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-launchdarkly.project.Project.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

Project.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

Project.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Project to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.defaultClientSideAvailability">DefaultClientSideAvailability</a></code> | <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList">ProjectDefaultClientSideAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.environments">Environments</a></code> | <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList">ProjectEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.defaultClientSideAvailabilityInput">DefaultClientSideAvailabilityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.environmentsInput">EnvironmentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.includeInSnippetInput">IncludeInSnippetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.includeInSnippet">IncludeInSnippet</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.project.Project.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.project.Project.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.project.Project.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.project.Project.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.project.Project.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.project.Project.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.project.Project.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.project.Project.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.project.Project.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.project.Project.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.project.Project.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.project.Project.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.project.Project.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.project.Project.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefaultClientSideAvailability`<sup>Required</sup> <a name="DefaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.Project.property.defaultClientSideAvailability"></a>

```csharp
public ProjectDefaultClientSideAvailabilityList DefaultClientSideAvailability { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList">ProjectDefaultClientSideAvailabilityList</a>

---

##### `Environments`<sup>Required</sup> <a name="Environments" id="@cdktf/provider-launchdarkly.project.Project.property.environments"></a>

```csharp
public ProjectEnvironmentsList Environments { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList">ProjectEnvironmentsList</a>

---

##### `DefaultClientSideAvailabilityInput`<sup>Optional</sup> <a name="DefaultClientSideAvailabilityInput" id="@cdktf/provider-launchdarkly.project.Project.property.defaultClientSideAvailabilityInput"></a>

```csharp
public object DefaultClientSideAvailabilityInput { get; }
```

- *Type:* object

---

##### `EnvironmentsInput`<sup>Optional</sup> <a name="EnvironmentsInput" id="@cdktf/provider-launchdarkly.project.Project.property.environmentsInput"></a>

```csharp
public object EnvironmentsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.project.Project.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeInSnippetInput`<sup>Optional</sup> <a name="IncludeInSnippetInput" id="@cdktf/provider-launchdarkly.project.Project.property.includeInSnippetInput"></a>

```csharp
public object IncludeInSnippetInput { get; }
```

- *Type:* object

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.project.Project.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.project.Project.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-launchdarkly.project.Project.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.project.Project.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeInSnippet`<sup>Required</sup> <a name="IncludeInSnippet" id="@cdktf/provider-launchdarkly.project.Project.property.includeInSnippet"></a>

```csharp
public object IncludeInSnippet { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.project.Project.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.project.Project.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.project.Project.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.project.Project.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-launchdarkly.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.project.ProjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new ProjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Environments,
    string Key,
    string Name,
    object DefaultClientSideAvailability = null,
    string Id = null,
    object IncludeInSnippet = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.environments">Environments</a></code> | <code>object</code> | environments block. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.key">Key</a></code> | <code>string</code> | The project's unique key. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.name">Name</a></code> | <code>string</code> | A human-readable name for your project. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.defaultClientSideAvailability">DefaultClientSideAvailability</a></code> | <code>object</code> | default_client_side_availability block. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#id Project#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.includeInSnippet">IncludeInSnippet</a></code> | <code>object</code> | Whether feature flags created under the project should be available to client-side SDKs by default. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.tags">Tags</a></code> | <code>string[]</code> | Tags associated with your resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Environments`<sup>Required</sup> <a name="Environments" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.environments"></a>

```csharp
public object Environments { get; set; }
```

- *Type:* object

environments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#environments Project#environments}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The project's unique key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#key Project#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A human-readable name for your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#name Project#name}

---

##### `DefaultClientSideAvailability`<sup>Optional</sup> <a name="DefaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.defaultClientSideAvailability"></a>

```csharp
public object DefaultClientSideAvailability { get; set; }
```

- *Type:* object

default_client_side_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#default_client_side_availability Project#default_client_side_availability}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#id Project#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeInSnippet`<sup>Optional</sup> <a name="IncludeInSnippet" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.includeInSnippet"></a>

```csharp
public object IncludeInSnippet { get; set; }
```

- *Type:* object

Whether feature flags created under the project should be available to client-side SDKs by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#include_in_snippet Project#include_in_snippet}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#tags Project#tags}

---

### ProjectDefaultClientSideAvailability <a name="ProjectDefaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new ProjectDefaultClientSideAvailability {
    object UsingEnvironmentId,
    object UsingMobileKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.property.usingEnvironmentId">UsingEnvironmentId</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#using_environment_id Project#using_environment_id}. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.property.usingMobileKey">UsingMobileKey</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#using_mobile_key Project#using_mobile_key}. |

---

##### `UsingEnvironmentId`<sup>Required</sup> <a name="UsingEnvironmentId" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.property.usingEnvironmentId"></a>

```csharp
public object UsingEnvironmentId { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#using_environment_id Project#using_environment_id}.

---

##### `UsingMobileKey`<sup>Required</sup> <a name="UsingMobileKey" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.property.usingMobileKey"></a>

```csharp
public object UsingMobileKey { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#using_mobile_key Project#using_mobile_key}.

---

### ProjectEnvironments <a name="ProjectEnvironments" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new ProjectEnvironments {
    string Color,
    string Key,
    string Name,
    object ApprovalSettings = null,
    object ConfirmChanges = null,
    object DefaultTrackEvents = null,
    double DefaultTtl = null,
    object RequireComments = null,
    object SecureMode = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.color">Color</a></code> | <code>string</code> | The color swatch as an RGB hex value with no leading `#`. For example: `000000`. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.key">Key</a></code> | <code>string</code> | The project-unique key for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.name">Name</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.approvalSettings">ApprovalSettings</a></code> | <code>object</code> | approval_settings block. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.confirmChanges">ConfirmChanges</a></code> | <code>object</code> | Set to `true` if this environment requires confirmation for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.defaultTrackEvents">DefaultTrackEvents</a></code> | <code>object</code> | Set to `true` to enable data export for every flag created in this environment after you configure this argument. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | The TTL for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.requireComments">RequireComments</a></code> | <code>object</code> | Set to `true` if this environment requires comments for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.secureMode">SecureMode</a></code> | <code>object</code> | Set to `true` to ensure a user of the client-side SDK cannot impersonate another user. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.tags">Tags</a></code> | <code>string[]</code> | Tags associated with your resource. |

---

##### `Color`<sup>Required</sup> <a name="Color" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.color"></a>

```csharp
public string Color { get; set; }
```

- *Type:* string

The color swatch as an RGB hex value with no leading `#`. For example: `000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#color Project#color}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The project-unique key for the environment.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#key Project#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#name Project#name}

---

##### `ApprovalSettings`<sup>Optional</sup> <a name="ApprovalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.approvalSettings"></a>

```csharp
public object ApprovalSettings { get; set; }
```

- *Type:* object

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#approval_settings Project#approval_settings}

---

##### `ConfirmChanges`<sup>Optional</sup> <a name="ConfirmChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.confirmChanges"></a>

```csharp
public object ConfirmChanges { get; set; }
```

- *Type:* object

Set to `true` if this environment requires confirmation for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#confirm_changes Project#confirm_changes}

---

##### `DefaultTrackEvents`<sup>Optional</sup> <a name="DefaultTrackEvents" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.defaultTrackEvents"></a>

```csharp
public object DefaultTrackEvents { get; set; }
```

- *Type:* object

Set to `true` to enable data export for every flag created in this environment after you configure this argument.

This field will default to `false` when not set. To learn more, read [Data Export](https://docs.launchdarkly.com/home/data-export).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#default_track_events Project#default_track_events}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; set; }
```

- *Type:* double

The TTL for the environment.

This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK. This field will default to `0` when not set. To learn more, read [TTL settings](https://docs.launchdarkly.com/home/organize/environments#ttl-settings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#default_ttl Project#default_ttl}

---

##### `RequireComments`<sup>Optional</sup> <a name="RequireComments" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.requireComments"></a>

```csharp
public object RequireComments { get; set; }
```

- *Type:* object

Set to `true` if this environment requires comments for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#require_comments Project#require_comments}

---

##### `SecureMode`<sup>Optional</sup> <a name="SecureMode" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.secureMode"></a>

```csharp
public object SecureMode { get; set; }
```

- *Type:* object

Set to `true` to ensure a user of the client-side SDK cannot impersonate another user.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#secure_mode Project#secure_mode}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#tags Project#tags}

---

### ProjectEnvironmentsApprovalSettings <a name="ProjectEnvironmentsApprovalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new ProjectEnvironmentsApprovalSettings {
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
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.canApplyDeclinedChanges">CanApplyDeclinedChanges</a></code> | <code>object</code> | Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.canReviewOwnRequest">CanReviewOwnRequest</a></code> | <code>object</code> | Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.minNumApprovals">MinNumApprovals</a></code> | <code>double</code> | The number of approvals required before an approval request can be applied. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.required">Required</a></code> | <code>object</code> | Set to `true` for changes to flags in this environment to require approval. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.requiredApprovalTags">RequiredApprovalTags</a></code> | <code>string[]</code> | An array of tags used to specify which flags with those tags require approval. |

---

##### `CanApplyDeclinedChanges`<sup>Optional</sup> <a name="CanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.canApplyDeclinedChanges"></a>

```csharp
public object CanApplyDeclinedChanges { get; set; }
```

- *Type:* object

Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request.

Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#can_apply_declined_changes Project#can_apply_declined_changes}

---

##### `CanReviewOwnRequest`<sup>Optional</sup> <a name="CanReviewOwnRequest" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.canReviewOwnRequest"></a>

```csharp
public object CanReviewOwnRequest { get; set; }
```

- *Type:* object

Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#can_review_own_request Project#can_review_own_request}

---

##### `MinNumApprovals`<sup>Optional</sup> <a name="MinNumApprovals" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.minNumApprovals"></a>

```csharp
public double MinNumApprovals { get; set; }
```

- *Type:* double

The number of approvals required before an approval request can be applied.

This number must be between 1 and 5. Defaults to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#min_num_approvals Project#min_num_approvals}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

Set to `true` for changes to flags in this environment to require approval.

You may only set `required` to true if `required_approval_tags` is not set and vice versa. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#required Project#required}

---

##### `RequiredApprovalTags`<sup>Optional</sup> <a name="RequiredApprovalTags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.requiredApprovalTags"></a>

```csharp
public string[] RequiredApprovalTags { get; set; }
```

- *Type:* string[]

An array of tags used to specify which flags with those tags require approval.

You may only set `required_approval_tags` if `required` is not set to `true` and vice versa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/project#required_approval_tags Project#required_approval_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectDefaultClientSideAvailabilityList <a name="ProjectDefaultClientSideAvailabilityList" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new ProjectDefaultClientSideAvailabilityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.get"></a>

```csharp
private ProjectDefaultClientSideAvailabilityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectDefaultClientSideAvailabilityOutputReference <a name="ProjectDefaultClientSideAvailabilityOutputReference" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new ProjectDefaultClientSideAvailabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput">UsingEnvironmentIdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKeyInput">UsingMobileKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentId">UsingEnvironmentId</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKey">UsingMobileKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsingEnvironmentIdInput`<sup>Optional</sup> <a name="UsingEnvironmentIdInput" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput"></a>

```csharp
public object UsingEnvironmentIdInput { get; }
```

- *Type:* object

---

##### `UsingMobileKeyInput`<sup>Optional</sup> <a name="UsingMobileKeyInput" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKeyInput"></a>

```csharp
public object UsingMobileKeyInput { get; }
```

- *Type:* object

---

##### `UsingEnvironmentId`<sup>Required</sup> <a name="UsingEnvironmentId" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentId"></a>

```csharp
public object UsingEnvironmentId { get; }
```

- *Type:* object

---

##### `UsingMobileKey`<sup>Required</sup> <a name="UsingMobileKey" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKey"></a>

```csharp
public object UsingMobileKey { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectEnvironmentsApprovalSettingsList <a name="ProjectEnvironmentsApprovalSettingsList" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new ProjectEnvironmentsApprovalSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.get"></a>

```csharp
private ProjectEnvironmentsApprovalSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectEnvironmentsApprovalSettingsOutputReference <a name="ProjectEnvironmentsApprovalSettingsOutputReference" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new ProjectEnvironmentsApprovalSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetCanApplyDeclinedChanges">ResetCanApplyDeclinedChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetCanReviewOwnRequest">ResetCanReviewOwnRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetMinNumApprovals">ResetMinNumApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetRequiredApprovalTags">ResetRequiredApprovalTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCanApplyDeclinedChanges` <a name="ResetCanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetCanApplyDeclinedChanges"></a>

```csharp
private void ResetCanApplyDeclinedChanges()
```

##### `ResetCanReviewOwnRequest` <a name="ResetCanReviewOwnRequest" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetCanReviewOwnRequest"></a>

```csharp
private void ResetCanReviewOwnRequest()
```

##### `ResetMinNumApprovals` <a name="ResetMinNumApprovals" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetMinNumApprovals"></a>

```csharp
private void ResetMinNumApprovals()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetRequiredApprovalTags` <a name="ResetRequiredApprovalTags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetRequiredApprovalTags"></a>

```csharp
private void ResetRequiredApprovalTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput">CanApplyDeclinedChangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canReviewOwnRequestInput">CanReviewOwnRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.minNumApprovalsInput">MinNumApprovalsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredApprovalTagsInput">RequiredApprovalTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canApplyDeclinedChanges">CanApplyDeclinedChanges</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canReviewOwnRequest">CanReviewOwnRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.minNumApprovals">MinNumApprovals</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredApprovalTags">RequiredApprovalTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CanApplyDeclinedChangesInput`<sup>Optional</sup> <a name="CanApplyDeclinedChangesInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput"></a>

```csharp
public object CanApplyDeclinedChangesInput { get; }
```

- *Type:* object

---

##### `CanReviewOwnRequestInput`<sup>Optional</sup> <a name="CanReviewOwnRequestInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canReviewOwnRequestInput"></a>

```csharp
public object CanReviewOwnRequestInput { get; }
```

- *Type:* object

---

##### `MinNumApprovalsInput`<sup>Optional</sup> <a name="MinNumApprovalsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.minNumApprovalsInput"></a>

```csharp
public double MinNumApprovalsInput { get; }
```

- *Type:* double

---

##### `RequiredApprovalTagsInput`<sup>Optional</sup> <a name="RequiredApprovalTagsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredApprovalTagsInput"></a>

```csharp
public string[] RequiredApprovalTagsInput { get; }
```

- *Type:* string[]

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `CanApplyDeclinedChanges`<sup>Required</sup> <a name="CanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canApplyDeclinedChanges"></a>

```csharp
public object CanApplyDeclinedChanges { get; }
```

- *Type:* object

---

##### `CanReviewOwnRequest`<sup>Required</sup> <a name="CanReviewOwnRequest" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canReviewOwnRequest"></a>

```csharp
public object CanReviewOwnRequest { get; }
```

- *Type:* object

---

##### `MinNumApprovals`<sup>Required</sup> <a name="MinNumApprovals" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.minNumApprovals"></a>

```csharp
public double MinNumApprovals { get; }
```

- *Type:* double

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `RequiredApprovalTags`<sup>Required</sup> <a name="RequiredApprovalTags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredApprovalTags"></a>

```csharp
public string[] RequiredApprovalTags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectEnvironmentsList <a name="ProjectEnvironmentsList" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new ProjectEnvironmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.get"></a>

```csharp
private ProjectEnvironmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectEnvironmentsOutputReference <a name="ProjectEnvironmentsOutputReference" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new ProjectEnvironmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.putApprovalSettings">PutApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetApprovalSettings">ResetApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetConfirmChanges">ResetConfirmChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetDefaultTrackEvents">ResetDefaultTrackEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetRequireComments">ResetRequireComments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetSecureMode">ResetSecureMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApprovalSettings` <a name="PutApprovalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.putApprovalSettings"></a>

```csharp
private void PutApprovalSettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.putApprovalSettings.parameter.value"></a>

- *Type:* object

---

##### `ResetApprovalSettings` <a name="ResetApprovalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetApprovalSettings"></a>

```csharp
private void ResetApprovalSettings()
```

##### `ResetConfirmChanges` <a name="ResetConfirmChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetConfirmChanges"></a>

```csharp
private void ResetConfirmChanges()
```

##### `ResetDefaultTrackEvents` <a name="ResetDefaultTrackEvents" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetDefaultTrackEvents"></a>

```csharp
private void ResetDefaultTrackEvents()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetDefaultTtl"></a>

```csharp
private void ResetDefaultTtl()
```

##### `ResetRequireComments` <a name="ResetRequireComments" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetRequireComments"></a>

```csharp
private void ResetRequireComments()
```

##### `ResetSecureMode` <a name="ResetSecureMode" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetSecureMode"></a>

```csharp
private void ResetSecureMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.approvalSettings">ApprovalSettings</a></code> | <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList">ProjectEnvironmentsApprovalSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.clientSideId">ClientSideId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.mobileKey">MobileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.approvalSettingsInput">ApprovalSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.colorInput">ColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.confirmChangesInput">ConfirmChangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTrackEventsInput">DefaultTrackEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.requireCommentsInput">RequireCommentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.secureModeInput">SecureModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.color">Color</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.confirmChanges">ConfirmChanges</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTrackEvents">DefaultTrackEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.requireComments">RequireComments</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.secureMode">SecureMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApprovalSettings`<sup>Required</sup> <a name="ApprovalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.approvalSettings"></a>

```csharp
public ProjectEnvironmentsApprovalSettingsList ApprovalSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList">ProjectEnvironmentsApprovalSettingsList</a>

---

##### `ClientSideId`<sup>Required</sup> <a name="ClientSideId" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.clientSideId"></a>

```csharp
public string ClientSideId { get; }
```

- *Type:* string

---

##### `MobileKey`<sup>Required</sup> <a name="MobileKey" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.mobileKey"></a>

```csharp
public string MobileKey { get; }
```

- *Type:* string

---

##### `ApprovalSettingsInput`<sup>Optional</sup> <a name="ApprovalSettingsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.approvalSettingsInput"></a>

```csharp
public object ApprovalSettingsInput { get; }
```

- *Type:* object

---

##### `ColorInput`<sup>Optional</sup> <a name="ColorInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.colorInput"></a>

```csharp
public string ColorInput { get; }
```

- *Type:* string

---

##### `ConfirmChangesInput`<sup>Optional</sup> <a name="ConfirmChangesInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.confirmChangesInput"></a>

```csharp
public object ConfirmChangesInput { get; }
```

- *Type:* object

---

##### `DefaultTrackEventsInput`<sup>Optional</sup> <a name="DefaultTrackEventsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTrackEventsInput"></a>

```csharp
public object DefaultTrackEventsInput { get; }
```

- *Type:* object

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTtlInput"></a>

```csharp
public double DefaultTtlInput { get; }
```

- *Type:* double

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequireCommentsInput`<sup>Optional</sup> <a name="RequireCommentsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.requireCommentsInput"></a>

```csharp
public object RequireCommentsInput { get; }
```

- *Type:* object

---

##### `SecureModeInput`<sup>Optional</sup> <a name="SecureModeInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.secureModeInput"></a>

```csharp
public object SecureModeInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Color`<sup>Required</sup> <a name="Color" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.color"></a>

```csharp
public string Color { get; }
```

- *Type:* string

---

##### `ConfirmChanges`<sup>Required</sup> <a name="ConfirmChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.confirmChanges"></a>

```csharp
public object ConfirmChanges { get; }
```

- *Type:* object

---

##### `DefaultTrackEvents`<sup>Required</sup> <a name="DefaultTrackEvents" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTrackEvents"></a>

```csharp
public object DefaultTrackEvents { get; }
```

- *Type:* object

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RequireComments`<sup>Required</sup> <a name="RequireComments" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.requireComments"></a>

```csharp
public object RequireComments { get; }
```

- *Type:* object

---

##### `SecureMode`<sup>Required</sup> <a name="SecureMode" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.secureMode"></a>

```csharp
public object SecureMode { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



