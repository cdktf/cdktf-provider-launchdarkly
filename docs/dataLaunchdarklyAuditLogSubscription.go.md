# `dataLaunchdarklyAuditLogSubscription` Submodule <a name="`dataLaunchdarklyAuditLogSubscription` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyAuditLogSubscription <a name="DataLaunchdarklyAuditLogSubscription" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/data-sources/audit_log_subscription launchdarkly_audit_log_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/datalaunchdarklyauditlogsubscription"

datalaunchdarklyauditlogsubscription.NewDataLaunchdarklyAuditLogSubscription(scope Construct, id *string, config DataLaunchdarklyAuditLogSubscriptionConfig) DataLaunchdarklyAuditLogSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig">DataLaunchdarklyAuditLogSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig">DataLaunchdarklyAuditLogSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataLaunchdarklyAuditLogSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/datalaunchdarklyauditlogsubscription"

datalaunchdarklyauditlogsubscription.DataLaunchdarklyAuditLogSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/datalaunchdarklyauditlogsubscription"

datalaunchdarklyauditlogsubscription.DataLaunchdarklyAuditLogSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/datalaunchdarklyauditlogsubscription"

datalaunchdarklyauditlogsubscription.DataLaunchdarklyAuditLogSubscription_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/datalaunchdarklyauditlogsubscription"

datalaunchdarklyauditlogsubscription.DataLaunchdarklyAuditLogSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataLaunchdarklyAuditLogSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataLaunchdarklyAuditLogSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataLaunchdarklyAuditLogSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/data-sources/audit_log_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataLaunchdarklyAuditLogSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.config">Config</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.on">On</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.statements">Statements</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList">DataLaunchdarklyAuditLogSubscriptionStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.integrationKeyInput">IntegrationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.integrationKey">IntegrationKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.config"></a>

```go
func Config() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `On`<sup>Required</sup> <a name="On" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.on"></a>

```go
func On() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Statements`<sup>Required</sup> <a name="Statements" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.statements"></a>

```go
func Statements() DataLaunchdarklyAuditLogSubscriptionStatementsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList">DataLaunchdarklyAuditLogSubscriptionStatementsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationKeyInput`<sup>Optional</sup> <a name="IntegrationKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.integrationKeyInput"></a>

```go
func IntegrationKeyInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.integrationKey"></a>

```go
func IntegrationKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyAuditLogSubscriptionConfig <a name="DataLaunchdarklyAuditLogSubscriptionConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/datalaunchdarklyauditlogsubscription"

&datalaunchdarklyauditlogsubscription.DataLaunchdarklyAuditLogSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	IntegrationKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | The audit log subscription ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.integrationKey">IntegrationKey</a></code> | <code>*string</code> | The integration key. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The audit log subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/data-sources/audit_log_subscription#id DataLaunchdarklyAuditLogSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.integrationKey"></a>

```go
IntegrationKey *string
```

- *Type:* *string

The integration key.

Supported integration keys are `chronosphere`, `cloudtrail`, `datadog`, `dynatrace`, `elastic`, `grafana`, `honeycomb`, `logdna`, `msteams`, `new-relic-apm`, `signalfx`, `slack`, and `splunk`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/data-sources/audit_log_subscription#integration_key DataLaunchdarklyAuditLogSubscription#integration_key}

---

### DataLaunchdarklyAuditLogSubscriptionStatements <a name="DataLaunchdarklyAuditLogSubscriptionStatements" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/datalaunchdarklyauditlogsubscription"

&datalaunchdarklyauditlogsubscription.DataLaunchdarklyAuditLogSubscriptionStatements {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyAuditLogSubscriptionStatementsList <a name="DataLaunchdarklyAuditLogSubscriptionStatementsList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/datalaunchdarklyauditlogsubscription"

datalaunchdarklyauditlogsubscription.NewDataLaunchdarklyAuditLogSubscriptionStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLaunchdarklyAuditLogSubscriptionStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.get"></a>

```go
func Get(index *f64) DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference <a name="DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/v4/datalaunchdarklyauditlogsubscription"

datalaunchdarklyauditlogsubscription.NewDataLaunchdarklyAuditLogSubscriptionStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notActions">NotActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notResources">NotResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `NotActions`<sup>Required</sup> <a name="NotActions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notActions"></a>

```go
func NotActions() *[]*string
```

- *Type:* *[]*string

---

##### `NotResources`<sup>Required</sup> <a name="NotResources" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notResources"></a>

```go
func NotResources() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLaunchdarklyAuditLogSubscriptionStatements
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a>

---



