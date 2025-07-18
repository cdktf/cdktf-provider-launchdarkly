# `metric` Submodule <a name="`metric` Submodule" id="@cdktf/provider-launchdarkly.metric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Metric <a name="Metric" id="@cdktf/provider-launchdarkly.metric.Metric"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric launchdarkly_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v5/metric"

metric.NewMetric(scope Construct, id *string, config MetricConfig) Metric
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig">MetricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.metric.MetricConfig">MetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.putUrls">PutUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetAnalysisType">ResetAnalysisType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetEventKey">ResetEventKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetIncludeUnitsWithoutEvents">ResetIncludeUnitsWithoutEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetIsActive">ResetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetIsNumeric">ResetIsNumeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetMaintainerId">ResetMaintainerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetPercentileValue">ResetPercentileValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetRandomizationUnits">ResetRandomizationUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetSuccessCriteria">ResetSuccessCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetUnitAggregationType">ResetUnitAggregationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetUrls">ResetUrls</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.metric.Metric.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.metric.Metric.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.metric.Metric.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.metric.Metric.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.metric.Metric.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.metric.Metric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.metric.Metric.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-launchdarkly.metric.Metric.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.metric.Metric.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.metric.Metric.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-launchdarkly.metric.Metric.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.metric.Metric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-launchdarkly.metric.Metric.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-launchdarkly.metric.Metric.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.metric.Metric.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-launchdarkly.metric.Metric.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-launchdarkly.metric.Metric.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.metric.Metric.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.metric.Metric.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-launchdarkly.metric.Metric.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutUrls` <a name="PutUrls" id="@cdktf/provider-launchdarkly.metric.Metric.putUrls"></a>

```go
func PutUrls(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.metric.Metric.putUrls.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnalysisType` <a name="ResetAnalysisType" id="@cdktf/provider-launchdarkly.metric.Metric.resetAnalysisType"></a>

```go
func ResetAnalysisType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-launchdarkly.metric.Metric.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEventKey` <a name="ResetEventKey" id="@cdktf/provider-launchdarkly.metric.Metric.resetEventKey"></a>

```go
func ResetEventKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-launchdarkly.metric.Metric.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeUnitsWithoutEvents` <a name="ResetIncludeUnitsWithoutEvents" id="@cdktf/provider-launchdarkly.metric.Metric.resetIncludeUnitsWithoutEvents"></a>

```go
func ResetIncludeUnitsWithoutEvents()
```

##### `ResetIsActive` <a name="ResetIsActive" id="@cdktf/provider-launchdarkly.metric.Metric.resetIsActive"></a>

```go
func ResetIsActive()
```

##### `ResetIsNumeric` <a name="ResetIsNumeric" id="@cdktf/provider-launchdarkly.metric.Metric.resetIsNumeric"></a>

```go
func ResetIsNumeric()
```

##### `ResetMaintainerId` <a name="ResetMaintainerId" id="@cdktf/provider-launchdarkly.metric.Metric.resetMaintainerId"></a>

```go
func ResetMaintainerId()
```

##### `ResetPercentileValue` <a name="ResetPercentileValue" id="@cdktf/provider-launchdarkly.metric.Metric.resetPercentileValue"></a>

```go
func ResetPercentileValue()
```

##### `ResetRandomizationUnits` <a name="ResetRandomizationUnits" id="@cdktf/provider-launchdarkly.metric.Metric.resetRandomizationUnits"></a>

```go
func ResetRandomizationUnits()
```

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-launchdarkly.metric.Metric.resetSelector"></a>

```go
func ResetSelector()
```

##### `ResetSuccessCriteria` <a name="ResetSuccessCriteria" id="@cdktf/provider-launchdarkly.metric.Metric.resetSuccessCriteria"></a>

```go
func ResetSuccessCriteria()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-launchdarkly.metric.Metric.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-launchdarkly.metric.Metric.resetUnit"></a>

```go
func ResetUnit()
```

##### `ResetUnitAggregationType` <a name="ResetUnitAggregationType" id="@cdktf/provider-launchdarkly.metric.Metric.resetUnitAggregationType"></a>

```go
func ResetUnitAggregationType()
```

##### `ResetUrls` <a name="ResetUrls" id="@cdktf/provider-launchdarkly.metric.Metric.resetUrls"></a>

```go
func ResetUrls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Metric resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.metric.Metric.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v5/metric"

metric.Metric_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.metric.Metric.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v5/metric"

metric.Metric_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v5/metric"

metric.Metric_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v5/metric"

metric.Metric_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Metric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Metric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Metric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Metric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.urls">Urls</a></code> | <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList">MetricUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.analysisTypeInput">AnalysisTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.eventKeyInput">EventKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.includeUnitsWithoutEventsInput">IncludeUnitsWithoutEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isActiveInput">IsActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isNumericInput">IsNumericInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.maintainerIdInput">MaintainerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.percentileValueInput">PercentileValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.projectKeyInput">ProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnitsInput">RandomizationUnitsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.selectorInput">SelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.successCriteriaInput">SuccessCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.unitAggregationTypeInput">UnitAggregationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.urlsInput">UrlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.analysisType">AnalysisType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.eventKey">EventKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.includeUnitsWithoutEvents">IncludeUnitsWithoutEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isActive">IsActive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isNumeric">IsNumeric</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.maintainerId">MaintainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.percentileValue">PercentileValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.projectKey">ProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnits">RandomizationUnits</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.selector">Selector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.successCriteria">SuccessCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.unitAggregationType">UnitAggregationType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.metric.Metric.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.metric.Metric.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.metric.Metric.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.metric.Metric.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.metric.Metric.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.metric.Metric.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.metric.Metric.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.metric.Metric.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.metric.Metric.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.metric.Metric.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.metric.Metric.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.metric.Metric.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.metric.Metric.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.metric.Metric.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-launchdarkly.metric.Metric.property.urls"></a>

```go
func Urls() MetricUrlsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList">MetricUrlsList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-launchdarkly.metric.Metric.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `AnalysisTypeInput`<sup>Optional</sup> <a name="AnalysisTypeInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.analysisTypeInput"></a>

```go
func AnalysisTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventKeyInput`<sup>Optional</sup> <a name="EventKeyInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.eventKeyInput"></a>

```go
func EventKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeUnitsWithoutEventsInput`<sup>Optional</sup> <a name="IncludeUnitsWithoutEventsInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.includeUnitsWithoutEventsInput"></a>

```go
func IncludeUnitsWithoutEventsInput() interface{}
```

- *Type:* interface{}

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.isActiveInput"></a>

```go
func IsActiveInput() interface{}
```

- *Type:* interface{}

---

##### `IsNumericInput`<sup>Optional</sup> <a name="IsNumericInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.isNumericInput"></a>

```go
func IsNumericInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `MaintainerIdInput`<sup>Optional</sup> <a name="MaintainerIdInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.maintainerIdInput"></a>

```go
func MaintainerIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PercentileValueInput`<sup>Optional</sup> <a name="PercentileValueInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.percentileValueInput"></a>

```go
func PercentileValueInput() *f64
```

- *Type:* *f64

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.projectKeyInput"></a>

```go
func ProjectKeyInput() *string
```

- *Type:* *string

---

##### `RandomizationUnitsInput`<sup>Optional</sup> <a name="RandomizationUnitsInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnitsInput"></a>

```go
func RandomizationUnitsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.selectorInput"></a>

```go
func SelectorInput() *string
```

- *Type:* *string

---

##### `SuccessCriteriaInput`<sup>Optional</sup> <a name="SuccessCriteriaInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.successCriteriaInput"></a>

```go
func SuccessCriteriaInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UnitAggregationTypeInput`<sup>Optional</sup> <a name="UnitAggregationTypeInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.unitAggregationTypeInput"></a>

```go
func UnitAggregationTypeInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `UrlsInput`<sup>Optional</sup> <a name="UrlsInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.urlsInput"></a>

```go
func UrlsInput() interface{}
```

- *Type:* interface{}

---

##### `AnalysisType`<sup>Required</sup> <a name="AnalysisType" id="@cdktf/provider-launchdarkly.metric.Metric.property.analysisType"></a>

```go
func AnalysisType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-launchdarkly.metric.Metric.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EventKey`<sup>Required</sup> <a name="EventKey" id="@cdktf/provider-launchdarkly.metric.Metric.property.eventKey"></a>

```go
func EventKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.metric.Metric.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeUnitsWithoutEvents`<sup>Required</sup> <a name="IncludeUnitsWithoutEvents" id="@cdktf/provider-launchdarkly.metric.Metric.property.includeUnitsWithoutEvents"></a>

```go
func IncludeUnitsWithoutEvents() interface{}
```

- *Type:* interface{}

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-launchdarkly.metric.Metric.property.isActive"></a>

```go
func IsActive() interface{}
```

- *Type:* interface{}

---

##### `IsNumeric`<sup>Required</sup> <a name="IsNumeric" id="@cdktf/provider-launchdarkly.metric.Metric.property.isNumeric"></a>

```go
func IsNumeric() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.metric.Metric.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.metric.Metric.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `MaintainerId`<sup>Required</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.metric.Metric.property.maintainerId"></a>

```go
func MaintainerId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.metric.Metric.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PercentileValue`<sup>Required</sup> <a name="PercentileValue" id="@cdktf/provider-launchdarkly.metric.Metric.property.percentileValue"></a>

```go
func PercentileValue() *f64
```

- *Type:* *f64

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.metric.Metric.property.projectKey"></a>

```go
func ProjectKey() *string
```

- *Type:* *string

---

##### `RandomizationUnits`<sup>Required</sup> <a name="RandomizationUnits" id="@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnits"></a>

```go
func RandomizationUnits() *[]*string
```

- *Type:* *[]*string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-launchdarkly.metric.Metric.property.selector"></a>

```go
func Selector() *string
```

- *Type:* *string

---

##### `SuccessCriteria`<sup>Required</sup> <a name="SuccessCriteria" id="@cdktf/provider-launchdarkly.metric.Metric.property.successCriteria"></a>

```go
func SuccessCriteria() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.metric.Metric.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-launchdarkly.metric.Metric.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `UnitAggregationType`<sup>Required</sup> <a name="UnitAggregationType" id="@cdktf/provider-launchdarkly.metric.Metric.property.unitAggregationType"></a>

```go
func UnitAggregationType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.metric.Metric.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MetricConfig <a name="MetricConfig" id="@cdktf/provider-launchdarkly.metric.MetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.metric.MetricConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v5/metric"

&metric.MetricConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Key: *string,
	Kind: *string,
	Name: *string,
	ProjectKey: *string,
	AnalysisType: *string,
	Description: *string,
	EventKey: *string,
	Id: *string,
	IncludeUnitsWithoutEvents: interface{},
	IsActive: interface{},
	IsNumeric: interface{},
	MaintainerId: *string,
	PercentileValue: *f64,
	RandomizationUnits: *[]*string,
	Selector: *string,
	SuccessCriteria: *string,
	Tags: *[]*string,
	Unit: *string,
	UnitAggregationType: *string,
	Urls: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.key">Key</a></code> | <code>*string</code> | The unique key that references the metric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.kind">Kind</a></code> | <code>*string</code> | The metric type. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.name">Name</a></code> | <code>*string</code> | The human-friendly name for the metric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.projectKey">ProjectKey</a></code> | <code>*string</code> | The metrics's project key. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.analysisType">AnalysisType</a></code> | <code>*string</code> | The method for analyzing metric events. Available choices are `mean` and `percentile`. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.description">Description</a></code> | <code>*string</code> | The description of the metric's purpose. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.eventKey">EventKey</a></code> | <code>*string</code> | The event key for your metric (if custom metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#id Metric#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.includeUnitsWithoutEvents">IncludeUnitsWithoutEvents</a></code> | <code>interface{}</code> | Include units that did not send any events and set their value to 0. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.isActive">IsActive</a></code> | <code>interface{}</code> | Ignored. All metrics are considered active. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.isNumeric">IsNumeric</a></code> | <code>interface{}</code> | Whether a `custom` metric is a numeric metric or not. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.maintainerId">MaintainerId</a></code> | <code>*string</code> | The LaunchDarkly member ID of the member who will maintain the metric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.percentileValue">PercentileValue</a></code> | <code>*f64</code> | The percentile for the analysis method. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.randomizationUnits">RandomizationUnits</a></code> | <code>*[]*string</code> | A set of one or more context kinds that this metric can measure events from. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.selector">Selector</a></code> | <code>*string</code> | The CSS selector for your metric (if click metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.successCriteria">SuccessCriteria</a></code> | <code>*string</code> | The success criteria for your metric (if numeric metric). Available choices are `HigherThanBaseline` and `LowerThanBaseline`. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.unit">Unit</a></code> | <code>*string</code> | (Required for kind `custom`) The unit for numeric `custom` metrics. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.unitAggregationType">UnitAggregationType</a></code> | <code>*string</code> | The method by which multiple unit event values are aggregated. Available choices are `average` and `sum`. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.urls">Urls</a></code> | <code>interface{}</code> | urls block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

The unique key that references the metric.

A change in this field will force the destruction of the existing resource and the creation of a new one. A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#key Metric#key}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

The metric type.

Available choices are `click`, `custom`, and `pageview`. A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#kind Metric#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The human-friendly name for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#name Metric#name}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.projectKey"></a>

```go
ProjectKey *string
```

- *Type:* *string

The metrics's project key.

A change in this field will force the destruction of the existing resource and the creation of a new one. A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#project_key Metric#project_key}

---

##### `AnalysisType`<sup>Optional</sup> <a name="AnalysisType" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.analysisType"></a>

```go
AnalysisType *string
```

- *Type:* *string

The method for analyzing metric events. Available choices are `mean` and `percentile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#analysis_type Metric#analysis_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the metric's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#description Metric#description}

---

##### `EventKey`<sup>Optional</sup> <a name="EventKey" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.eventKey"></a>

```go
EventKey *string
```

- *Type:* *string

The event key for your metric (if custom metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#event_key Metric#event_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#id Metric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeUnitsWithoutEvents`<sup>Optional</sup> <a name="IncludeUnitsWithoutEvents" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.includeUnitsWithoutEvents"></a>

```go
IncludeUnitsWithoutEvents interface{}
```

- *Type:* interface{}

Include units that did not send any events and set their value to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#include_units_without_events Metric#include_units_without_events}

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.isActive"></a>

```go
IsActive interface{}
```

- *Type:* interface{}

Ignored. All metrics are considered active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#is_active Metric#is_active}

---

##### `IsNumeric`<sup>Optional</sup> <a name="IsNumeric" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.isNumeric"></a>

```go
IsNumeric interface{}
```

- *Type:* interface{}

Whether a `custom` metric is a numeric metric or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#is_numeric Metric#is_numeric}

---

##### `MaintainerId`<sup>Optional</sup> <a name="MaintainerId" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.maintainerId"></a>

```go
MaintainerId *string
```

- *Type:* *string

The LaunchDarkly member ID of the member who will maintain the metric.

If not set, the API will automatically apply the member associated with your Terraform API key or the most recently-set maintainer

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#maintainer_id Metric#maintainer_id}

---

##### `PercentileValue`<sup>Optional</sup> <a name="PercentileValue" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.percentileValue"></a>

```go
PercentileValue *f64
```

- *Type:* *f64

The percentile for the analysis method.

An integer denoting the target percentile between 0 and 100. Required when analysis_type is percentile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#percentile_value Metric#percentile_value}

---

##### `RandomizationUnits`<sup>Optional</sup> <a name="RandomizationUnits" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.randomizationUnits"></a>

```go
RandomizationUnits *[]*string
```

- *Type:* *[]*string

A set of one or more context kinds that this metric can measure events from.

Metrics can only use context kinds marked as "Available for experiments." For more information, read [Allocating experiment audiences](https://docs.launchdarkly.com/home/creating-experiments/allocation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#randomization_units Metric#randomization_units}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.selector"></a>

```go
Selector *string
```

- *Type:* *string

The CSS selector for your metric (if click metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#selector Metric#selector}

---

##### `SuccessCriteria`<sup>Optional</sup> <a name="SuccessCriteria" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.successCriteria"></a>

```go
SuccessCriteria *string
```

- *Type:* *string

The success criteria for your metric (if numeric metric). Available choices are `HigherThanBaseline` and `LowerThanBaseline`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#success_criteria Metric#success_criteria}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#tags Metric#tags}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

(Required for kind `custom`) The unit for numeric `custom` metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#unit Metric#unit}

---

##### `UnitAggregationType`<sup>Optional</sup> <a name="UnitAggregationType" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.unitAggregationType"></a>

```go
UnitAggregationType *string
```

- *Type:* *string

The method by which multiple unit event values are aggregated. Available choices are `average` and `sum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#unit_aggregation_type Metric#unit_aggregation_type}

---

##### `Urls`<sup>Optional</sup> <a name="Urls" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.urls"></a>

```go
Urls interface{}
```

- *Type:* interface{}

urls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#urls Metric#urls}

---

### MetricUrls <a name="MetricUrls" id="@cdktf/provider-launchdarkly.metric.MetricUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.metric.MetricUrls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v5/metric"

&metric.MetricUrls {
	Kind: *string,
	Pattern: *string,
	Substring: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.kind">Kind</a></code> | <code>*string</code> | The URL type. Available choices are `exact`, `canonical`, `substring` and `regex`. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.pattern">Pattern</a></code> | <code>*string</code> | (Required for kind `regex`) The regex pattern to match by. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.substring">Substring</a></code> | <code>*string</code> | (Required for kind `substring`) The URL substring to match by. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.url">Url</a></code> | <code>*string</code> | (Required for kind `exact` and `canonical`) The exact or canonical URL. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

The URL type. Available choices are `exact`, `canonical`, `substring` and `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#kind Metric#kind}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

(Required for kind `regex`) The regex pattern to match by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#pattern Metric#pattern}

---

##### `Substring`<sup>Optional</sup> <a name="Substring" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.substring"></a>

```go
Substring *string
```

- *Type:* *string

(Required for kind `substring`) The URL substring to match by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#substring Metric#substring}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.url"></a>

```go
Url *string
```

- *Type:* *string

(Required for kind `exact` and `canonical`) The exact or canonical URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/metric#url Metric#url}

---

## Classes <a name="Classes" id="Classes"></a>

### MetricUrlsList <a name="MetricUrlsList" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v5/metric"

metric.NewMetricUrlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MetricUrlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.get"></a>

```go
func Get(index *f64) MetricUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MetricUrlsOutputReference <a name="MetricUrlsOutputReference" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v5/metric"

metric.NewMetricUrlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MetricUrlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetSubstring">ResetSubstring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetSubstring` <a name="ResetSubstring" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetSubstring"></a>

```go
func ResetSubstring()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substringInput">SubstringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substring">Substring</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `SubstringInput`<sup>Optional</sup> <a name="SubstringInput" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substringInput"></a>

```go
func SubstringInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `Substring`<sup>Required</sup> <a name="Substring" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substring"></a>

```go
func Substring() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



