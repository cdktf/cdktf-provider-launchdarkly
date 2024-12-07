# `featureFlag` Submodule <a name="`featureFlag` Submodule" id="@cdktf/provider-launchdarkly.featureFlag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureFlag <a name="FeatureFlag" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag launchdarkly_feature_flag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

featureflag.NewFeatureFlag(scope Construct, id *string, config FeatureFlagConfig) FeatureFlag
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig">FeatureFlagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig">FeatureFlagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability">PutClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties">PutCustomProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults">PutDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations">PutVariations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetArchived">ResetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetClientSideAvailability">ResetClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetCustomProperties">ResetCustomProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDefaults">ResetDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetIncludeInSnippet">ResetIncludeInSnippet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerId">ResetMaintainerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerTeamKey">ResetMaintainerTeamKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTemporary">ResetTemporary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetVariations">ResetVariations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClientSideAvailability` <a name="PutClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability"></a>

```go
func PutClientSideAvailability(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCustomProperties` <a name="PutCustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties"></a>

```go
func PutCustomProperties(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaults` <a name="PutDefaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults"></a>

```go
func PutDefaults(value FeatureFlagDefaults)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---

##### `PutVariations` <a name="PutVariations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations"></a>

```go
func PutVariations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArchived` <a name="ResetArchived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetArchived"></a>

```go
func ResetArchived()
```

##### `ResetClientSideAvailability` <a name="ResetClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetClientSideAvailability"></a>

```go
func ResetClientSideAvailability()
```

##### `ResetCustomProperties` <a name="ResetCustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetCustomProperties"></a>

```go
func ResetCustomProperties()
```

##### `ResetDefaults` <a name="ResetDefaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDefaults"></a>

```go
func ResetDefaults()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeInSnippet` <a name="ResetIncludeInSnippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetIncludeInSnippet"></a>

```go
func ResetIncludeInSnippet()
```

##### `ResetMaintainerId` <a name="ResetMaintainerId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerId"></a>

```go
func ResetMaintainerId()
```

##### `ResetMaintainerTeamKey` <a name="ResetMaintainerTeamKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerTeamKey"></a>

```go
func ResetMaintainerTeamKey()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTemporary` <a name="ResetTemporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTemporary"></a>

```go
func ResetTemporary()
```

##### `ResetVariations` <a name="ResetVariations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetVariations"></a>

```go
func ResetVariations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FeatureFlag resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

featureflag.FeatureFlag_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

featureflag.FeatureFlag_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

featureflag.FeatureFlag_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

featureflag.FeatureFlag_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FeatureFlag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FeatureFlag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FeatureFlag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FeatureFlag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailability">ClientSideAvailability</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList">FeatureFlagClientSideAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customProperties">CustomProperties</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList">FeatureFlagCustomPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaults">Defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference">FeatureFlagDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variations">Variations</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList">FeatureFlagVariationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archivedInput">ArchivedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailabilityInput">ClientSideAvailabilityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customPropertiesInput">CustomPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaultsInput">DefaultsInput</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippetInput">IncludeInSnippetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerIdInput">MaintainerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKeyInput">MaintainerTeamKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKeyInput">ProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporaryInput">TemporaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationsInput">VariationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationTypeInput">VariationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archived">Archived</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippet">IncludeInSnippet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerId">MaintainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKey">MaintainerTeamKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKey">ProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporary">Temporary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationType">VariationType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientSideAvailability`<sup>Required</sup> <a name="ClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailability"></a>

```go
func ClientSideAvailability() FeatureFlagClientSideAvailabilityList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList">FeatureFlagClientSideAvailabilityList</a>

---

##### `CustomProperties`<sup>Required</sup> <a name="CustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customProperties"></a>

```go
func CustomProperties() FeatureFlagCustomPropertiesList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList">FeatureFlagCustomPropertiesList</a>

---

##### `Defaults`<sup>Required</sup> <a name="Defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaults"></a>

```go
func Defaults() FeatureFlagDefaultsOutputReference
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference">FeatureFlagDefaultsOutputReference</a>

---

##### `Variations`<sup>Required</sup> <a name="Variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variations"></a>

```go
func Variations() FeatureFlagVariationsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList">FeatureFlagVariationsList</a>

---

##### `ArchivedInput`<sup>Optional</sup> <a name="ArchivedInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archivedInput"></a>

```go
func ArchivedInput() interface{}
```

- *Type:* interface{}

---

##### `ClientSideAvailabilityInput`<sup>Optional</sup> <a name="ClientSideAvailabilityInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailabilityInput"></a>

```go
func ClientSideAvailabilityInput() interface{}
```

- *Type:* interface{}

---

##### `CustomPropertiesInput`<sup>Optional</sup> <a name="CustomPropertiesInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customPropertiesInput"></a>

```go
func CustomPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultsInput`<sup>Optional</sup> <a name="DefaultsInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaultsInput"></a>

```go
func DefaultsInput() FeatureFlagDefaults
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeInSnippetInput`<sup>Optional</sup> <a name="IncludeInSnippetInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippetInput"></a>

```go
func IncludeInSnippetInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MaintainerIdInput`<sup>Optional</sup> <a name="MaintainerIdInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerIdInput"></a>

```go
func MaintainerIdInput() *string
```

- *Type:* *string

---

##### `MaintainerTeamKeyInput`<sup>Optional</sup> <a name="MaintainerTeamKeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKeyInput"></a>

```go
func MaintainerTeamKeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKeyInput"></a>

```go
func ProjectKeyInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TemporaryInput`<sup>Optional</sup> <a name="TemporaryInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporaryInput"></a>

```go
func TemporaryInput() interface{}
```

- *Type:* interface{}

---

##### `VariationsInput`<sup>Optional</sup> <a name="VariationsInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationsInput"></a>

```go
func VariationsInput() interface{}
```

- *Type:* interface{}

---

##### `VariationTypeInput`<sup>Optional</sup> <a name="VariationTypeInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationTypeInput"></a>

```go
func VariationTypeInput() *string
```

- *Type:* *string

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archived"></a>

```go
func Archived() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeInSnippet`<sup>Required</sup> <a name="IncludeInSnippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippet"></a>

```go
func IncludeInSnippet() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MaintainerId`<sup>Required</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerId"></a>

```go
func MaintainerId() *string
```

- *Type:* *string

---

##### `MaintainerTeamKey`<sup>Required</sup> <a name="MaintainerTeamKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKey"></a>

```go
func MaintainerTeamKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKey"></a>

```go
func ProjectKey() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Temporary`<sup>Required</sup> <a name="Temporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporary"></a>

```go
func Temporary() interface{}
```

- *Type:* interface{}

---

##### `VariationType`<sup>Required</sup> <a name="VariationType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationType"></a>

```go
func VariationType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureFlagClientSideAvailability <a name="FeatureFlagClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

&featureflag.FeatureFlagClientSideAvailability {
	UsingEnvironmentId: interface{},
	UsingMobileKey: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingEnvironmentId">UsingEnvironmentId</a></code> | <code>interface{}</code> | Whether this flag is available to SDKs using the client-side ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingMobileKey">UsingMobileKey</a></code> | <code>interface{}</code> | Whether this flag is available to SDKs using a mobile key. |

---

##### `UsingEnvironmentId`<sup>Optional</sup> <a name="UsingEnvironmentId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingEnvironmentId"></a>

```go
UsingEnvironmentId interface{}
```

- *Type:* interface{}

Whether this flag is available to SDKs using the client-side ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#using_environment_id FeatureFlag#using_environment_id}

---

##### `UsingMobileKey`<sup>Optional</sup> <a name="UsingMobileKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingMobileKey"></a>

```go
UsingMobileKey interface{}
```

- *Type:* interface{}

Whether this flag is available to SDKs using a mobile key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#using_mobile_key FeatureFlag#using_mobile_key}

---

### FeatureFlagConfig <a name="FeatureFlagConfig" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

&featureflag.FeatureFlagConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Key: *string,
	Name: *string,
	ProjectKey: *string,
	VariationType: *string,
	Archived: interface{},
	ClientSideAvailability: interface{},
	CustomProperties: interface{},
	Defaults: github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4.featureFlag.FeatureFlagDefaults,
	Description: *string,
	Id: *string,
	IncludeInSnippet: interface{},
	MaintainerId: *string,
	MaintainerTeamKey: *string,
	Tags: *[]*string,
	Temporary: interface{},
	Variations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.key">Key</a></code> | <code>*string</code> | The unique feature flag key that references the flag in your application code. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.name">Name</a></code> | <code>*string</code> | The human-readable name of the feature flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.projectKey">ProjectKey</a></code> | <code>*string</code> | The feature flag's project key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variationType">VariationType</a></code> | <code>*string</code> | The feature flag's variation type: `boolean`, `string`, `number` or `json`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.archived">Archived</a></code> | <code>interface{}</code> | Specifies whether the flag is archived or not. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.clientSideAvailability">ClientSideAvailability</a></code> | <code>interface{}</code> | client_side_availability block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.customProperties">CustomProperties</a></code> | <code>interface{}</code> | custom_properties block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.defaults">Defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | defaults block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.description">Description</a></code> | <code>*string</code> | The feature flag's description. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#id FeatureFlag#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.includeInSnippet">IncludeInSnippet</a></code> | <code>interface{}</code> | Specifies whether this flag should be made available to the client-side JavaScript SDK using the client-side Id. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerId">MaintainerId</a></code> | <code>*string</code> | The feature flag maintainer's 24 character alphanumeric team member ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerTeamKey">MaintainerTeamKey</a></code> | <code>*string</code> | The key of the associated team that maintains this feature flag. `maintainer_id` cannot be set if `maintainer_team_key` is set. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.temporary">Temporary</a></code> | <code>interface{}</code> | Specifies whether the flag is a temporary flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variations">Variations</a></code> | <code>interface{}</code> | variations block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

The unique feature flag key that references the flag in your application code.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#key FeatureFlag#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The human-readable name of the feature flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#name FeatureFlag#name}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.projectKey"></a>

```go
ProjectKey *string
```

- *Type:* *string

The feature flag's project key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#project_key FeatureFlag#project_key}

---

##### `VariationType`<sup>Required</sup> <a name="VariationType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variationType"></a>

```go
VariationType *string
```

- *Type:* *string

The feature flag's variation type: `boolean`, `string`, `number` or `json`.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#variation_type FeatureFlag#variation_type}

---

##### `Archived`<sup>Optional</sup> <a name="Archived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.archived"></a>

```go
Archived interface{}
```

- *Type:* interface{}

Specifies whether the flag is archived or not.

Note that you cannot create a new flag that is archived, but can update a flag to be archived.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#archived FeatureFlag#archived}

---

##### `ClientSideAvailability`<sup>Optional</sup> <a name="ClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.clientSideAvailability"></a>

```go
ClientSideAvailability interface{}
```

- *Type:* interface{}

client_side_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#client_side_availability FeatureFlag#client_side_availability}

---

##### `CustomProperties`<sup>Optional</sup> <a name="CustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.customProperties"></a>

```go
CustomProperties interface{}
```

- *Type:* interface{}

custom_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#custom_properties FeatureFlag#custom_properties}

---

##### `Defaults`<sup>Optional</sup> <a name="Defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.defaults"></a>

```go
Defaults FeatureFlagDefaults
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#defaults FeatureFlag#defaults}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The feature flag's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#description FeatureFlag#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#id FeatureFlag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeInSnippet`<sup>Optional</sup> <a name="IncludeInSnippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.includeInSnippet"></a>

```go
IncludeInSnippet interface{}
```

- *Type:* interface{}

Specifies whether this flag should be made available to the client-side JavaScript SDK using the client-side Id.

This value gets its default from your project configuration if not set. `include_in_snippet` is now deprecated. Please migrate to `client_side_availability.using_environment_id` to maintain future compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#include_in_snippet FeatureFlag#include_in_snippet}

---

##### `MaintainerId`<sup>Optional</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerId"></a>

```go
MaintainerId *string
```

- *Type:* *string

The feature flag maintainer's 24 character alphanumeric team member ID.

`maintainer_team_key` cannot be set if `maintainer_id` is set. If neither is set, it will automatically be or stay set to the member ID associated with the API key used by your LaunchDarkly Terraform provider or the most recently-set maintainer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#maintainer_id FeatureFlag#maintainer_id}

---

##### `MaintainerTeamKey`<sup>Optional</sup> <a name="MaintainerTeamKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerTeamKey"></a>

```go
MaintainerTeamKey *string
```

- *Type:* *string

The key of the associated team that maintains this feature flag. `maintainer_id` cannot be set if `maintainer_team_key` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#maintainer_team_key FeatureFlag#maintainer_team_key}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#tags FeatureFlag#tags}

---

##### `Temporary`<sup>Optional</sup> <a name="Temporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.temporary"></a>

```go
Temporary interface{}
```

- *Type:* interface{}

Specifies whether the flag is a temporary flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#temporary FeatureFlag#temporary}

---

##### `Variations`<sup>Optional</sup> <a name="Variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variations"></a>

```go
Variations interface{}
```

- *Type:* interface{}

variations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#variations FeatureFlag#variations}

---

### FeatureFlagCustomProperties <a name="FeatureFlagCustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

&featureflag.FeatureFlagCustomProperties {
	Key: *string,
	Name: *string,
	Value: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.key">Key</a></code> | <code>*string</code> | The unique custom property key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.name">Name</a></code> | <code>*string</code> | The name of the custom property. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.value">Value</a></code> | <code>*[]*string</code> | The list of custom property value strings. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.key"></a>

```go
Key *string
```

- *Type:* *string

The unique custom property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#key FeatureFlag#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#name FeatureFlag#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.value"></a>

```go
Value *[]*string
```

- *Type:* *[]*string

The list of custom property value strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#value FeatureFlag#value}

---

### FeatureFlagDefaults <a name="FeatureFlagDefaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

&featureflag.FeatureFlagDefaults {
	OffVariation: *f64,
	OnVariation: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.offVariation">OffVariation</a></code> | <code>*f64</code> | The index of the variation the flag will default to in all new environments when off. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.onVariation">OnVariation</a></code> | <code>*f64</code> | The index of the variation the flag will default to in all new environments when on. |

---

##### `OffVariation`<sup>Required</sup> <a name="OffVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.offVariation"></a>

```go
OffVariation *f64
```

- *Type:* *f64

The index of the variation the flag will default to in all new environments when off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#off_variation FeatureFlag#off_variation}

---

##### `OnVariation`<sup>Required</sup> <a name="OnVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.onVariation"></a>

```go
OnVariation *f64
```

- *Type:* *f64

The index of the variation the flag will default to in all new environments when on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#on_variation FeatureFlag#on_variation}

---

### FeatureFlagVariations <a name="FeatureFlagVariations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

&featureflag.FeatureFlagVariations {
	Value: *string,
	Description: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.value">Value</a></code> | <code>*string</code> | The variation value. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.description">Description</a></code> | <code>*string</code> | The variation's description. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.name">Name</a></code> | <code>*string</code> | The name of the variation. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.value"></a>

```go
Value *string
```

- *Type:* *string

The variation value.

The value's type must correspond to the `variation_type` argument. For example: `variation_type = "boolean"` accepts only `true` or `false`. The `number` variation type accepts both floats and ints, but please note that any trailing zeroes on floats will be trimmed (i.e. `1.1` and `1.100` will both be converted to `1.1`).

If you wish to define an empty string variation, you must still define the value field on the variations block like so:

```terraform
variations {
  value = ""
}
```

-> **Note:** Terraform manages `variations` as an ordered array and identifies them by index. This means that if you change the order of your `variations` block, you may end up destroying and recreating those variations. Additionally, if you delete variations that have targets that have been attached outside of Terraform, those targets may be incorrectly reassigned to a different variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#value FeatureFlag#value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.description"></a>

```go
Description *string
```

- *Type:* *string

The variation's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#description FeatureFlag#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs/resources/feature_flag#name FeatureFlag#name}

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureFlagClientSideAvailabilityList <a name="FeatureFlagClientSideAvailabilityList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

featureflag.NewFeatureFlagClientSideAvailabilityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FeatureFlagClientSideAvailabilityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get"></a>

```go
func Get(index *f64) FeatureFlagClientSideAvailabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureFlagClientSideAvailabilityOutputReference <a name="FeatureFlagClientSideAvailabilityOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

featureflag.NewFeatureFlagClientSideAvailabilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FeatureFlagClientSideAvailabilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingEnvironmentId">ResetUsingEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingMobileKey">ResetUsingMobileKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUsingEnvironmentId` <a name="ResetUsingEnvironmentId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingEnvironmentId"></a>

```go
func ResetUsingEnvironmentId()
```

##### `ResetUsingMobileKey` <a name="ResetUsingMobileKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingMobileKey"></a>

```go
func ResetUsingMobileKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput">UsingEnvironmentIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput">UsingMobileKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId">UsingEnvironmentId</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey">UsingMobileKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsingEnvironmentIdInput`<sup>Optional</sup> <a name="UsingEnvironmentIdInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput"></a>

```go
func UsingEnvironmentIdInput() interface{}
```

- *Type:* interface{}

---

##### `UsingMobileKeyInput`<sup>Optional</sup> <a name="UsingMobileKeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput"></a>

```go
func UsingMobileKeyInput() interface{}
```

- *Type:* interface{}

---

##### `UsingEnvironmentId`<sup>Required</sup> <a name="UsingEnvironmentId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId"></a>

```go
func UsingEnvironmentId() interface{}
```

- *Type:* interface{}

---

##### `UsingMobileKey`<sup>Required</sup> <a name="UsingMobileKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey"></a>

```go
func UsingMobileKey() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureFlagCustomPropertiesList <a name="FeatureFlagCustomPropertiesList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

featureflag.NewFeatureFlagCustomPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FeatureFlagCustomPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get"></a>

```go
func Get(index *f64) FeatureFlagCustomPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureFlagCustomPropertiesOutputReference <a name="FeatureFlagCustomPropertiesOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

featureflag.NewFeatureFlagCustomPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FeatureFlagCustomPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.valueInput">ValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.value">Value</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.valueInput"></a>

```go
func ValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.value"></a>

```go
func Value() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureFlagDefaultsOutputReference <a name="FeatureFlagDefaultsOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

featureflag.NewFeatureFlagDefaultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FeatureFlagDefaultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariationInput">OffVariationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariationInput">OnVariationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariation">OffVariation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariation">OnVariation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OffVariationInput`<sup>Optional</sup> <a name="OffVariationInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariationInput"></a>

```go
func OffVariationInput() *f64
```

- *Type:* *f64

---

##### `OnVariationInput`<sup>Optional</sup> <a name="OnVariationInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariationInput"></a>

```go
func OnVariationInput() *f64
```

- *Type:* *f64

---

##### `OffVariation`<sup>Required</sup> <a name="OffVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariation"></a>

```go
func OffVariation() *f64
```

- *Type:* *f64

---

##### `OnVariation`<sup>Required</sup> <a name="OnVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariation"></a>

```go
func OnVariation() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.internalValue"></a>

```go
func InternalValue() FeatureFlagDefaults
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---


### FeatureFlagVariationsList <a name="FeatureFlagVariationsList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

featureflag.NewFeatureFlagVariationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FeatureFlagVariationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get"></a>

```go
func Get(index *f64) FeatureFlagVariationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureFlagVariationsOutputReference <a name="FeatureFlagVariationsOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/featureflag"

featureflag.NewFeatureFlagVariationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FeatureFlagVariationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



