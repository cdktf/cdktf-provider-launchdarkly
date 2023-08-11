# `launchdarkly_environment`

Refer to the Terraform Registory for docs: [`launchdarkly_environment`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment).

# `environment` Submodule <a name="`environment` Submodule" id="@cdktf/provider-launchdarkly.environment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Environment <a name="Environment" id="@cdktf/provider-launchdarkly.environment.Environment"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment launchdarkly_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new Environment(Construct Scope, string Id, EnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig">EnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig">EnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.putApprovalSettings">PutApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetApprovalSettings">ResetApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetConfirmChanges">ResetConfirmChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTrackEvents">ResetDefaultTrackEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetRequireComments">ResetRequireComments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetSecureMode">ResetSecureMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.environment.Environment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.environment.Environment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-launchdarkly.environment.Environment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.environment.Environment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.environment.Environment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-launchdarkly.environment.Environment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.environment.Environment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.environment.Environment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.environment.Environment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutApprovalSettings` <a name="PutApprovalSettings" id="@cdktf/provider-launchdarkly.environment.Environment.putApprovalSettings"></a>

```csharp
private void PutApprovalSettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.environment.Environment.putApprovalSettings.parameter.value"></a>

- *Type:* object

---

##### `ResetApprovalSettings` <a name="ResetApprovalSettings" id="@cdktf/provider-launchdarkly.environment.Environment.resetApprovalSettings"></a>

```csharp
private void ResetApprovalSettings()
```

##### `ResetConfirmChanges` <a name="ResetConfirmChanges" id="@cdktf/provider-launchdarkly.environment.Environment.resetConfirmChanges"></a>

```csharp
private void ResetConfirmChanges()
```

##### `ResetDefaultTrackEvents` <a name="ResetDefaultTrackEvents" id="@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTrackEvents"></a>

```csharp
private void ResetDefaultTrackEvents()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTtl"></a>

```csharp
private void ResetDefaultTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-launchdarkly.environment.Environment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRequireComments` <a name="ResetRequireComments" id="@cdktf/provider-launchdarkly.environment.Environment.resetRequireComments"></a>

```csharp
private void ResetRequireComments()
```

##### `ResetSecureMode` <a name="ResetSecureMode" id="@cdktf/provider-launchdarkly.environment.Environment.resetSecureMode"></a>

```csharp
private void ResetSecureMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-launchdarkly.environment.Environment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.environment.Environment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

Environment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.environment.Environment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

Environment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

Environment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettings">ApprovalSettings</a></code> | <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList">EnvironmentApprovalSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.clientSideId">ClientSideId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.mobileKey">MobileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettingsInput">ApprovalSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.colorInput">ColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.confirmChangesInput">ConfirmChangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEventsInput">DefaultTrackEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.requireCommentsInput">RequireCommentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.secureModeInput">SecureModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.color">Color</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.confirmChanges">ConfirmChanges</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEvents">DefaultTrackEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.requireComments">RequireComments</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.secureMode">SecureMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.environment.Environment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.environment.Environment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.environment.Environment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.environment.Environment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.environment.Environment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.environment.Environment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.environment.Environment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.environment.Environment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.environment.Environment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.environment.Environment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.environment.Environment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.environment.Environment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.environment.Environment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.environment.Environment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-launchdarkly.environment.Environment.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApprovalSettings`<sup>Required</sup> <a name="ApprovalSettings" id="@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettings"></a>

```csharp
public EnvironmentApprovalSettingsList ApprovalSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList">EnvironmentApprovalSettingsList</a>

---

##### `ClientSideId`<sup>Required</sup> <a name="ClientSideId" id="@cdktf/provider-launchdarkly.environment.Environment.property.clientSideId"></a>

```csharp
public string ClientSideId { get; }
```

- *Type:* string

---

##### `MobileKey`<sup>Required</sup> <a name="MobileKey" id="@cdktf/provider-launchdarkly.environment.Environment.property.mobileKey"></a>

```csharp
public string MobileKey { get; }
```

- *Type:* string

---

##### `ApprovalSettingsInput`<sup>Optional</sup> <a name="ApprovalSettingsInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettingsInput"></a>

```csharp
public object ApprovalSettingsInput { get; }
```

- *Type:* object

---

##### `ColorInput`<sup>Optional</sup> <a name="ColorInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.colorInput"></a>

```csharp
public string ColorInput { get; }
```

- *Type:* string

---

##### `ConfirmChangesInput`<sup>Optional</sup> <a name="ConfirmChangesInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.confirmChangesInput"></a>

```csharp
public object ConfirmChangesInput { get; }
```

- *Type:* object

---

##### `DefaultTrackEventsInput`<sup>Optional</sup> <a name="DefaultTrackEventsInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEventsInput"></a>

```csharp
public object DefaultTrackEventsInput { get; }
```

- *Type:* object

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtlInput"></a>

```csharp
public double DefaultTtlInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `RequireCommentsInput`<sup>Optional</sup> <a name="RequireCommentsInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.requireCommentsInput"></a>

```csharp
public object RequireCommentsInput { get; }
```

- *Type:* object

---

##### `SecureModeInput`<sup>Optional</sup> <a name="SecureModeInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.secureModeInput"></a>

```csharp
public object SecureModeInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Color`<sup>Required</sup> <a name="Color" id="@cdktf/provider-launchdarkly.environment.Environment.property.color"></a>

```csharp
public string Color { get; }
```

- *Type:* string

---

##### `ConfirmChanges`<sup>Required</sup> <a name="ConfirmChanges" id="@cdktf/provider-launchdarkly.environment.Environment.property.confirmChanges"></a>

```csharp
public object ConfirmChanges { get; }
```

- *Type:* object

---

##### `DefaultTrackEvents`<sup>Required</sup> <a name="DefaultTrackEvents" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEvents"></a>

```csharp
public object DefaultTrackEvents { get; }
```

- *Type:* object

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.environment.Environment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.environment.Environment.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.environment.Environment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.environment.Environment.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `RequireComments`<sup>Required</sup> <a name="RequireComments" id="@cdktf/provider-launchdarkly.environment.Environment.property.requireComments"></a>

```csharp
public object RequireComments { get; }
```

- *Type:* object

---

##### `SecureMode`<sup>Required</sup> <a name="SecureMode" id="@cdktf/provider-launchdarkly.environment.Environment.property.secureMode"></a>

```csharp
public object SecureMode { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.environment.Environment.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.environment.Environment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnvironmentApprovalSettings <a name="EnvironmentApprovalSettings" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new EnvironmentApprovalSettings {
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
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canApplyDeclinedChanges">CanApplyDeclinedChanges</a></code> | <code>object</code> | Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canReviewOwnRequest">CanReviewOwnRequest</a></code> | <code>object</code> | Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.minNumApprovals">MinNumApprovals</a></code> | <code>double</code> | The number of approvals required before an approval request can be applied. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.required">Required</a></code> | <code>object</code> | Set to `true` for changes to flags in this environment to require approval. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.requiredApprovalTags">RequiredApprovalTags</a></code> | <code>string[]</code> | An array of tags used to specify which flags with those tags require approval. |

---

##### `CanApplyDeclinedChanges`<sup>Optional</sup> <a name="CanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canApplyDeclinedChanges"></a>

```csharp
public object CanApplyDeclinedChanges { get; set; }
```

- *Type:* object

Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request.

Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#can_apply_declined_changes Environment#can_apply_declined_changes}

---

##### `CanReviewOwnRequest`<sup>Optional</sup> <a name="CanReviewOwnRequest" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canReviewOwnRequest"></a>

```csharp
public object CanReviewOwnRequest { get; set; }
```

- *Type:* object

Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#can_review_own_request Environment#can_review_own_request}

---

##### `MinNumApprovals`<sup>Optional</sup> <a name="MinNumApprovals" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.minNumApprovals"></a>

```csharp
public double MinNumApprovals { get; set; }
```

- *Type:* double

The number of approvals required before an approval request can be applied.

This number must be between 1 and 5. Defaults to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#min_num_approvals Environment#min_num_approvals}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

Set to `true` for changes to flags in this environment to require approval.

You may only set `required` to true if `required_approval_tags` is not set and vice versa. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#required Environment#required}

---

##### `RequiredApprovalTags`<sup>Optional</sup> <a name="RequiredApprovalTags" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.requiredApprovalTags"></a>

```csharp
public string[] RequiredApprovalTags { get; set; }
```

- *Type:* string[]

An array of tags used to specify which flags with those tags require approval.

You may only set `required_approval_tags` if `required` is not set to `true` and vice versa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#required_approval_tags Environment#required_approval_tags}

---

### EnvironmentConfig <a name="EnvironmentConfig" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new EnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Color,
    string Key,
    string Name,
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
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.color">Color</a></code> | <code>string</code> | The color swatch as an RGB hex value with no leading `#`. For example: `000000`. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.key">Key</a></code> | <code>string</code> | The project-unique key for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.name">Name</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.projectKey">ProjectKey</a></code> | <code>string</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.approvalSettings">ApprovalSettings</a></code> | <code>object</code> | approval_settings block. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.confirmChanges">ConfirmChanges</a></code> | <code>object</code> | Set to `true` if this environment requires confirmation for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTrackEvents">DefaultTrackEvents</a></code> | <code>object</code> | Set to `true` to enable data export for every flag created in this environment after you configure this argument. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | The TTL for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#id Environment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.requireComments">RequireComments</a></code> | <code>object</code> | Set to `true` if this environment requires comments for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.secureMode">SecureMode</a></code> | <code>object</code> | Set to `true` to ensure a user of the client-side SDK cannot impersonate another user. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.tags">Tags</a></code> | <code>string[]</code> | Tags associated with your resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Color`<sup>Required</sup> <a name="Color" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.color"></a>

```csharp
public string Color { get; set; }
```

- *Type:* string

The color swatch as an RGB hex value with no leading `#`. For example: `000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#color Environment#color}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The project-unique key for the environment.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#key Environment#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#name Environment#name}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#project_key Environment#project_key}

---

##### `ApprovalSettings`<sup>Optional</sup> <a name="ApprovalSettings" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.approvalSettings"></a>

```csharp
public object ApprovalSettings { get; set; }
```

- *Type:* object

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#approval_settings Environment#approval_settings}

---

##### `ConfirmChanges`<sup>Optional</sup> <a name="ConfirmChanges" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.confirmChanges"></a>

```csharp
public object ConfirmChanges { get; set; }
```

- *Type:* object

Set to `true` if this environment requires confirmation for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#confirm_changes Environment#confirm_changes}

---

##### `DefaultTrackEvents`<sup>Optional</sup> <a name="DefaultTrackEvents" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTrackEvents"></a>

```csharp
public object DefaultTrackEvents { get; set; }
```

- *Type:* object

Set to `true` to enable data export for every flag created in this environment after you configure this argument.

This field will default to `false` when not set. To learn more, read [Data Export](https://docs.launchdarkly.com/home/data-export).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#default_track_events Environment#default_track_events}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; set; }
```

- *Type:* double

The TTL for the environment.

This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK. This field will default to `0` when not set. To learn more, read [TTL settings](https://docs.launchdarkly.com/home/organize/environments#ttl-settings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#default_ttl Environment#default_ttl}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#id Environment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequireComments`<sup>Optional</sup> <a name="RequireComments" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.requireComments"></a>

```csharp
public object RequireComments { get; set; }
```

- *Type:* object

Set to `true` if this environment requires comments for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#require_comments Environment#require_comments}

---

##### `SecureMode`<sup>Optional</sup> <a name="SecureMode" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.secureMode"></a>

```csharp
public object SecureMode { get; set; }
```

- *Type:* object

Set to `true` to ensure a user of the client-side SDK cannot impersonate another user.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#secure_mode Environment#secure_mode}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/resources/environment#tags Environment#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### EnvironmentApprovalSettingsList <a name="EnvironmentApprovalSettingsList" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new EnvironmentApprovalSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.get"></a>

```csharp
private EnvironmentApprovalSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EnvironmentApprovalSettingsOutputReference <a name="EnvironmentApprovalSettingsOutputReference" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new EnvironmentApprovalSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanApplyDeclinedChanges">ResetCanApplyDeclinedChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanReviewOwnRequest">ResetCanReviewOwnRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetMinNumApprovals">ResetMinNumApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequiredApprovalTags">ResetRequiredApprovalTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCanApplyDeclinedChanges` <a name="ResetCanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanApplyDeclinedChanges"></a>

```csharp
private void ResetCanApplyDeclinedChanges()
```

##### `ResetCanReviewOwnRequest` <a name="ResetCanReviewOwnRequest" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanReviewOwnRequest"></a>

```csharp
private void ResetCanReviewOwnRequest()
```

##### `ResetMinNumApprovals` <a name="ResetMinNumApprovals" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetMinNumApprovals"></a>

```csharp
private void ResetMinNumApprovals()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetRequiredApprovalTags` <a name="ResetRequiredApprovalTags" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequiredApprovalTags"></a>

```csharp
private void ResetRequiredApprovalTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput">CanApplyDeclinedChangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequestInput">CanReviewOwnRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovalsInput">MinNumApprovalsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTagsInput">RequiredApprovalTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChanges">CanApplyDeclinedChanges</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequest">CanReviewOwnRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovals">MinNumApprovals</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTags">RequiredApprovalTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CanApplyDeclinedChangesInput`<sup>Optional</sup> <a name="CanApplyDeclinedChangesInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput"></a>

```csharp
public object CanApplyDeclinedChangesInput { get; }
```

- *Type:* object

---

##### `CanReviewOwnRequestInput`<sup>Optional</sup> <a name="CanReviewOwnRequestInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequestInput"></a>

```csharp
public object CanReviewOwnRequestInput { get; }
```

- *Type:* object

---

##### `MinNumApprovalsInput`<sup>Optional</sup> <a name="MinNumApprovalsInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovalsInput"></a>

```csharp
public double MinNumApprovalsInput { get; }
```

- *Type:* double

---

##### `RequiredApprovalTagsInput`<sup>Optional</sup> <a name="RequiredApprovalTagsInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTagsInput"></a>

```csharp
public string[] RequiredApprovalTagsInput { get; }
```

- *Type:* string[]

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `CanApplyDeclinedChanges`<sup>Required</sup> <a name="CanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChanges"></a>

```csharp
public object CanApplyDeclinedChanges { get; }
```

- *Type:* object

---

##### `CanReviewOwnRequest`<sup>Required</sup> <a name="CanReviewOwnRequest" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequest"></a>

```csharp
public object CanReviewOwnRequest { get; }
```

- *Type:* object

---

##### `MinNumApprovals`<sup>Required</sup> <a name="MinNumApprovals" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovals"></a>

```csharp
public double MinNumApprovals { get; }
```

- *Type:* double

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `RequiredApprovalTags`<sup>Required</sup> <a name="RequiredApprovalTags" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTags"></a>

```csharp
public string[] RequiredApprovalTags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



