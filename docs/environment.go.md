# `launchdarkly_environment`

Refer to the Terraform Registory for docs: [`launchdarkly_environment`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment).

# `environment` Submodule <a name="`environment` Submodule" id="@cdktf/provider-launchdarkly.environment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Environment <a name="Environment" id="@cdktf/provider-launchdarkly.environment.Environment"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment launchdarkly_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/environment"

environment.NewEnvironment(scope Construct, id *string, config EnvironmentConfig) Environment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig">EnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.environment.Environment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.environment.Environment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.environment.Environment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.environment.Environment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.environment.Environment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.environment.Environment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.environment.Environment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.environment.Environment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-launchdarkly.environment.Environment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.environment.Environment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-launchdarkly.environment.Environment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.environment.Environment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.environment.Environment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-launchdarkly.environment.Environment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.environment.Environment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.environment.Environment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutApprovalSettings` <a name="PutApprovalSettings" id="@cdktf/provider-launchdarkly.environment.Environment.putApprovalSettings"></a>

```go
func PutApprovalSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.environment.Environment.putApprovalSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApprovalSettings` <a name="ResetApprovalSettings" id="@cdktf/provider-launchdarkly.environment.Environment.resetApprovalSettings"></a>

```go
func ResetApprovalSettings()
```

##### `ResetConfirmChanges` <a name="ResetConfirmChanges" id="@cdktf/provider-launchdarkly.environment.Environment.resetConfirmChanges"></a>

```go
func ResetConfirmChanges()
```

##### `ResetDefaultTrackEvents` <a name="ResetDefaultTrackEvents" id="@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTrackEvents"></a>

```go
func ResetDefaultTrackEvents()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTtl"></a>

```go
func ResetDefaultTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-launchdarkly.environment.Environment.resetId"></a>

```go
func ResetId()
```

##### `ResetRequireComments` <a name="ResetRequireComments" id="@cdktf/provider-launchdarkly.environment.Environment.resetRequireComments"></a>

```go
func ResetRequireComments()
```

##### `ResetSecureMode` <a name="ResetSecureMode" id="@cdktf/provider-launchdarkly.environment.Environment.resetSecureMode"></a>

```go
func ResetSecureMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-launchdarkly.environment.Environment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.environment.Environment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/environment"

environment.Environment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.environment.Environment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/environment"

environment.Environment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/environment"

environment.Environment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.environment.Environment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/environment"

environment.Environment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.environment.Environment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.environment.Environment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Environment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.environment.Environment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Environment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.environment.Environment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Environment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettings">ApprovalSettings</a></code> | <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList">EnvironmentApprovalSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.clientSideId">ClientSideId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.mobileKey">MobileKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettingsInput">ApprovalSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.colorInput">ColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.confirmChangesInput">ConfirmChangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEventsInput">DefaultTrackEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.projectKeyInput">ProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.requireCommentsInput">RequireCommentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.secureModeInput">SecureModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.color">Color</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.confirmChanges">ConfirmChanges</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEvents">DefaultTrackEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.projectKey">ProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.requireComments">RequireComments</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.secureMode">SecureMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.environment.Environment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.environment.Environment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.environment.Environment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.environment.Environment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.environment.Environment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.environment.Environment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.environment.Environment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.environment.Environment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.environment.Environment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.environment.Environment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.environment.Environment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.environment.Environment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.environment.Environment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.environment.Environment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-launchdarkly.environment.Environment.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ApprovalSettings`<sup>Required</sup> <a name="ApprovalSettings" id="@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettings"></a>

```go
func ApprovalSettings() EnvironmentApprovalSettingsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList">EnvironmentApprovalSettingsList</a>

---

##### `ClientSideId`<sup>Required</sup> <a name="ClientSideId" id="@cdktf/provider-launchdarkly.environment.Environment.property.clientSideId"></a>

```go
func ClientSideId() *string
```

- *Type:* *string

---

##### `MobileKey`<sup>Required</sup> <a name="MobileKey" id="@cdktf/provider-launchdarkly.environment.Environment.property.mobileKey"></a>

```go
func MobileKey() *string
```

- *Type:* *string

---

##### `ApprovalSettingsInput`<sup>Optional</sup> <a name="ApprovalSettingsInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettingsInput"></a>

```go
func ApprovalSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ColorInput`<sup>Optional</sup> <a name="ColorInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.colorInput"></a>

```go
func ColorInput() *string
```

- *Type:* *string

---

##### `ConfirmChangesInput`<sup>Optional</sup> <a name="ConfirmChangesInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.confirmChangesInput"></a>

```go
func ConfirmChangesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultTrackEventsInput`<sup>Optional</sup> <a name="DefaultTrackEventsInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEventsInput"></a>

```go
func DefaultTrackEventsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtlInput"></a>

```go
func DefaultTtlInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.projectKeyInput"></a>

```go
func ProjectKeyInput() *string
```

- *Type:* *string

---

##### `RequireCommentsInput`<sup>Optional</sup> <a name="RequireCommentsInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.requireCommentsInput"></a>

```go
func RequireCommentsInput() interface{}
```

- *Type:* interface{}

---

##### `SecureModeInput`<sup>Optional</sup> <a name="SecureModeInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.secureModeInput"></a>

```go
func SecureModeInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Color`<sup>Required</sup> <a name="Color" id="@cdktf/provider-launchdarkly.environment.Environment.property.color"></a>

```go
func Color() *string
```

- *Type:* *string

---

##### `ConfirmChanges`<sup>Required</sup> <a name="ConfirmChanges" id="@cdktf/provider-launchdarkly.environment.Environment.property.confirmChanges"></a>

```go
func ConfirmChanges() interface{}
```

- *Type:* interface{}

---

##### `DefaultTrackEvents`<sup>Required</sup> <a name="DefaultTrackEvents" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEvents"></a>

```go
func DefaultTrackEvents() interface{}
```

- *Type:* interface{}

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtl"></a>

```go
func DefaultTtl() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.environment.Environment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.environment.Environment.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.environment.Environment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.environment.Environment.property.projectKey"></a>

```go
func ProjectKey() *string
```

- *Type:* *string

---

##### `RequireComments`<sup>Required</sup> <a name="RequireComments" id="@cdktf/provider-launchdarkly.environment.Environment.property.requireComments"></a>

```go
func RequireComments() interface{}
```

- *Type:* interface{}

---

##### `SecureMode`<sup>Required</sup> <a name="SecureMode" id="@cdktf/provider-launchdarkly.environment.Environment.property.secureMode"></a>

```go
func SecureMode() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.environment.Environment.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.environment.Environment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EnvironmentApprovalSettings <a name="EnvironmentApprovalSettings" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/environment"

&environment.EnvironmentApprovalSettings {
	CanApplyDeclinedChanges: interface{},
	CanReviewOwnRequest: interface{},
	MinNumApprovals: *f64,
	Required: interface{},
	RequiredApprovalTags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canApplyDeclinedChanges">CanApplyDeclinedChanges</a></code> | <code>interface{}</code> | Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canReviewOwnRequest">CanReviewOwnRequest</a></code> | <code>interface{}</code> | Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.minNumApprovals">MinNumApprovals</a></code> | <code>*f64</code> | The number of approvals required before an approval request can be applied. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.required">Required</a></code> | <code>interface{}</code> | Set to `true` for changes to flags in this environment to require approval. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.requiredApprovalTags">RequiredApprovalTags</a></code> | <code>*[]*string</code> | An array of tags used to specify which flags with those tags require approval. |

---

##### `CanApplyDeclinedChanges`<sup>Optional</sup> <a name="CanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canApplyDeclinedChanges"></a>

```go
CanApplyDeclinedChanges interface{}
```

- *Type:* interface{}

Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request.

Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#can_apply_declined_changes Environment#can_apply_declined_changes}

---

##### `CanReviewOwnRequest`<sup>Optional</sup> <a name="CanReviewOwnRequest" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canReviewOwnRequest"></a>

```go
CanReviewOwnRequest interface{}
```

- *Type:* interface{}

Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#can_review_own_request Environment#can_review_own_request}

---

##### `MinNumApprovals`<sup>Optional</sup> <a name="MinNumApprovals" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.minNumApprovals"></a>

```go
MinNumApprovals *f64
```

- *Type:* *f64

The number of approvals required before an approval request can be applied.

This number must be between 1 and 5. Defaults to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#min_num_approvals Environment#min_num_approvals}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Set to `true` for changes to flags in this environment to require approval.

You may only set `required` to true if `required_approval_tags` is not set and vice versa. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#required Environment#required}

---

##### `RequiredApprovalTags`<sup>Optional</sup> <a name="RequiredApprovalTags" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.requiredApprovalTags"></a>

```go
RequiredApprovalTags *[]*string
```

- *Type:* *[]*string

An array of tags used to specify which flags with those tags require approval.

You may only set `required_approval_tags` if `required` is not set to `true` and vice versa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#required_approval_tags Environment#required_approval_tags}

---

### EnvironmentConfig <a name="EnvironmentConfig" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/environment"

&environment.EnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Color: *string,
	Key: *string,
	Name: *string,
	ProjectKey: *string,
	ApprovalSettings: interface{},
	ConfirmChanges: interface{},
	DefaultTrackEvents: interface{},
	DefaultTtl: *f64,
	Id: *string,
	RequireComments: interface{},
	SecureMode: interface{},
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.color">Color</a></code> | <code>*string</code> | The color swatch as an RGB hex value with no leading `#`. For example: `000000`. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.key">Key</a></code> | <code>*string</code> | The project-unique key for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.projectKey">ProjectKey</a></code> | <code>*string</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.approvalSettings">ApprovalSettings</a></code> | <code>interface{}</code> | approval_settings block. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.confirmChanges">ConfirmChanges</a></code> | <code>interface{}</code> | Set to `true` if this environment requires confirmation for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTrackEvents">DefaultTrackEvents</a></code> | <code>interface{}</code> | Set to `true` to enable data export for every flag created in this environment after you configure this argument. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | The TTL for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#id Environment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.requireComments">RequireComments</a></code> | <code>interface{}</code> | Set to `true` if this environment requires comments for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.secureMode">SecureMode</a></code> | <code>interface{}</code> | Set to `true` to ensure a user of the client-side SDK cannot impersonate another user. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Tags associated with your resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Color`<sup>Required</sup> <a name="Color" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.color"></a>

```go
Color *string
```

- *Type:* *string

The color swatch as an RGB hex value with no leading `#`. For example: `000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#color Environment#color}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

The project-unique key for the environment.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#key Environment#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#name Environment#name}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.projectKey"></a>

```go
ProjectKey *string
```

- *Type:* *string

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#project_key Environment#project_key}

---

##### `ApprovalSettings`<sup>Optional</sup> <a name="ApprovalSettings" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.approvalSettings"></a>

```go
ApprovalSettings interface{}
```

- *Type:* interface{}

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#approval_settings Environment#approval_settings}

---

##### `ConfirmChanges`<sup>Optional</sup> <a name="ConfirmChanges" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.confirmChanges"></a>

```go
ConfirmChanges interface{}
```

- *Type:* interface{}

Set to `true` if this environment requires confirmation for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#confirm_changes Environment#confirm_changes}

---

##### `DefaultTrackEvents`<sup>Optional</sup> <a name="DefaultTrackEvents" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTrackEvents"></a>

```go
DefaultTrackEvents interface{}
```

- *Type:* interface{}

Set to `true` to enable data export for every flag created in this environment after you configure this argument.

This field will default to `false` when not set. To learn more, read [Data Export](https://docs.launchdarkly.com/home/data-export).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#default_track_events Environment#default_track_events}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTtl"></a>

```go
DefaultTtl *f64
```

- *Type:* *f64

The TTL for the environment.

This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK. This field will default to `0` when not set. To learn more, read [TTL settings](https://docs.launchdarkly.com/home/organize/environments#ttl-settings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#default_ttl Environment#default_ttl}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#id Environment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequireComments`<sup>Optional</sup> <a name="RequireComments" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.requireComments"></a>

```go
RequireComments interface{}
```

- *Type:* interface{}

Set to `true` if this environment requires comments for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#require_comments Environment#require_comments}

---

##### `SecureMode`<sup>Optional</sup> <a name="SecureMode" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.secureMode"></a>

```go
SecureMode interface{}
```

- *Type:* interface{}

Set to `true` to ensure a user of the client-side SDK cannot impersonate another user.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#secure_mode Environment#secure_mode}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/environment#tags Environment#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### EnvironmentApprovalSettingsList <a name="EnvironmentApprovalSettingsList" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/environment"

environment.NewEnvironmentApprovalSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EnvironmentApprovalSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.get"></a>

```go
func Get(index *f64) EnvironmentApprovalSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EnvironmentApprovalSettingsOutputReference <a name="EnvironmentApprovalSettingsOutputReference" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/environment"

environment.NewEnvironmentApprovalSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EnvironmentApprovalSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCanApplyDeclinedChanges` <a name="ResetCanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanApplyDeclinedChanges"></a>

```go
func ResetCanApplyDeclinedChanges()
```

##### `ResetCanReviewOwnRequest` <a name="ResetCanReviewOwnRequest" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanReviewOwnRequest"></a>

```go
func ResetCanReviewOwnRequest()
```

##### `ResetMinNumApprovals` <a name="ResetMinNumApprovals" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetMinNumApprovals"></a>

```go
func ResetMinNumApprovals()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetRequiredApprovalTags` <a name="ResetRequiredApprovalTags" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequiredApprovalTags"></a>

```go
func ResetRequiredApprovalTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput">CanApplyDeclinedChangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequestInput">CanReviewOwnRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovalsInput">MinNumApprovalsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTagsInput">RequiredApprovalTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChanges">CanApplyDeclinedChanges</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequest">CanReviewOwnRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovals">MinNumApprovals</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTags">RequiredApprovalTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CanApplyDeclinedChangesInput`<sup>Optional</sup> <a name="CanApplyDeclinedChangesInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput"></a>

```go
func CanApplyDeclinedChangesInput() interface{}
```

- *Type:* interface{}

---

##### `CanReviewOwnRequestInput`<sup>Optional</sup> <a name="CanReviewOwnRequestInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequestInput"></a>

```go
func CanReviewOwnRequestInput() interface{}
```

- *Type:* interface{}

---

##### `MinNumApprovalsInput`<sup>Optional</sup> <a name="MinNumApprovalsInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovalsInput"></a>

```go
func MinNumApprovalsInput() *f64
```

- *Type:* *f64

---

##### `RequiredApprovalTagsInput`<sup>Optional</sup> <a name="RequiredApprovalTagsInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTagsInput"></a>

```go
func RequiredApprovalTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `CanApplyDeclinedChanges`<sup>Required</sup> <a name="CanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChanges"></a>

```go
func CanApplyDeclinedChanges() interface{}
```

- *Type:* interface{}

---

##### `CanReviewOwnRequest`<sup>Required</sup> <a name="CanReviewOwnRequest" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequest"></a>

```go
func CanReviewOwnRequest() interface{}
```

- *Type:* interface{}

---

##### `MinNumApprovals`<sup>Required</sup> <a name="MinNumApprovals" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovals"></a>

```go
func MinNumApprovals() *f64
```

- *Type:* *f64

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `RequiredApprovalTags`<sup>Required</sup> <a name="RequiredApprovalTags" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTags"></a>

```go
func RequiredApprovalTags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



