# `data_launchdarkly_audit_log_subscription`

Refer to the Terraform Registory for docs: [`data_launchdarkly_audit_log_subscription`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription).

# `dataLaunchdarklyAuditLogSubscription` Submodule <a name="`dataLaunchdarklyAuditLogSubscription` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyAuditLogSubscription <a name="DataLaunchdarklyAuditLogSubscription" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription launchdarkly_audit_log_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_audit_log_subscription

dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  integration_key: str,
  config: typing.Mapping[str] = None,
  name: str = None,
  on: typing.Union[bool, IResolvable] = None,
  statements: typing.Union[IResolvable, typing.List[DataLaunchdarklyAuditLogSubscriptionStatements]] = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The audit log subscription ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.integrationKey">integration_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#integration_key DataLaunchdarklyAuditLogSubscription#integration_key}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.config">config</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#config DataLaunchdarklyAuditLogSubscription#config}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#name DataLaunchdarklyAuditLogSubscription#name}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.on">on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#on DataLaunchdarklyAuditLogSubscription#on}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.statements">statements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a>]]</code> | statements block. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with your resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.id"></a>

- *Type:* str

The audit log subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#id DataLaunchdarklyAuditLogSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.integrationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#integration_key DataLaunchdarklyAuditLogSubscription#integration_key}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.config"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#config DataLaunchdarklyAuditLogSubscription#config}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#name DataLaunchdarklyAuditLogSubscription#name}.

---

##### `on`<sup>Optional</sup> <a name="on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.on"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#on DataLaunchdarklyAuditLogSubscription#on}.

---

##### `statements`<sup>Optional</sup> <a name="statements" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.statements"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a>]]

statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#statements DataLaunchdarklyAuditLogSubscription#statements}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#tags DataLaunchdarklyAuditLogSubscription#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.putStatements">put_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetOn">reset_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetStatements">reset_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_statements` <a name="put_statements" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.putStatements"></a>

```python
def put_statements(
  value: typing.Union[IResolvable, typing.List[DataLaunchdarklyAuditLogSubscriptionStatements]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.putStatements.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a>]]

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_on` <a name="reset_on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetOn"></a>

```python
def reset_on() -> None
```

##### `reset_statements` <a name="reset_statements" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetStatements"></a>

```python
def reset_statements() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_audit_log_subscription

dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_audit_log_subscription

dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_audit_log_subscription

dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.statements">statements</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList">DataLaunchdarklyAuditLogSubscriptionStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.configInput">config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.integrationKeyInput">integration_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.onInput">on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.statementsInput">statements_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.config">config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.integrationKey">integration_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.on">on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `statements`<sup>Required</sup> <a name="statements" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.statements"></a>

```python
statements: DataLaunchdarklyAuditLogSubscriptionStatementsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList">DataLaunchdarklyAuditLogSubscriptionStatementsList</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.configInput"></a>

```python
config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_key_input`<sup>Optional</sup> <a name="integration_key_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.integrationKeyInput"></a>

```python
integration_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `on_input`<sup>Optional</sup> <a name="on_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.onInput"></a>

```python
on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `statements_input`<sup>Optional</sup> <a name="statements_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.statementsInput"></a>

```python
statements_input: typing.Union[IResolvable, typing.List[DataLaunchdarklyAuditLogSubscriptionStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.on"></a>

```python
on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyAuditLogSubscriptionConfig <a name="DataLaunchdarklyAuditLogSubscriptionConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_audit_log_subscription

dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  integration_key: str,
  config: typing.Mapping[str] = None,
  name: str = None,
  on: typing.Union[bool, IResolvable] = None,
  statements: typing.Union[IResolvable, typing.List[DataLaunchdarklyAuditLogSubscriptionStatements]] = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.id">id</a></code> | <code>str</code> | The audit log subscription ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.integrationKey">integration_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#integration_key DataLaunchdarklyAuditLogSubscription#integration_key}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.config">config</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#config DataLaunchdarklyAuditLogSubscription#config}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#name DataLaunchdarklyAuditLogSubscription#name}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.on">on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#on DataLaunchdarklyAuditLogSubscription#on}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.statements">statements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a>]]</code> | statements block. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with your resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The audit log subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#id DataLaunchdarklyAuditLogSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#integration_key DataLaunchdarklyAuditLogSubscription#integration_key}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#config DataLaunchdarklyAuditLogSubscription#config}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#name DataLaunchdarklyAuditLogSubscription#name}.

---

##### `on`<sup>Optional</sup> <a name="on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.on"></a>

```python
on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#on DataLaunchdarklyAuditLogSubscription#on}.

---

##### `statements`<sup>Optional</sup> <a name="statements" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.statements"></a>

```python
statements: typing.Union[IResolvable, typing.List[DataLaunchdarklyAuditLogSubscriptionStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a>]]

statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#statements DataLaunchdarklyAuditLogSubscription#statements}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#tags DataLaunchdarklyAuditLogSubscription#tags}

---

### DataLaunchdarklyAuditLogSubscriptionStatements <a name="DataLaunchdarklyAuditLogSubscriptionStatements" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_audit_log_subscription

dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements(
  effect: str,
  actions: typing.List[str] = None,
  not_actions: typing.List[str] = None,
  not_resources: typing.List[str] = None,
  resources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements.property.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#effect DataLaunchdarklyAuditLogSubscription#effect}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements.property.actions">actions</a></code> | <code>typing.List[str]</code> | An action to perform on a resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | Targeted actions will be those actions NOT in this list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | Targeted resources will be those resources NOT in this list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements.property.resources">resources</a></code> | <code>typing.List[str]</code> | A list of LaunchDarkly resource specifiers. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements.property.effect"></a>

```python
effect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#effect DataLaunchdarklyAuditLogSubscription#effect}.

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

An action to perform on a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#actions DataLaunchdarklyAuditLogSubscription#actions}

---

##### `not_actions`<sup>Optional</sup> <a name="not_actions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

Targeted actions will be those actions NOT in this list.

The 'actions' field must be empty to use this field

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#not_actions DataLaunchdarklyAuditLogSubscription#not_actions}

---

##### `not_resources`<sup>Optional</sup> <a name="not_resources" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

Targeted resources will be those resources NOT in this list.

The 'resources' field must be empty to use this field

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#not_resources DataLaunchdarklyAuditLogSubscription#not_resources}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of LaunchDarkly resource specifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/data-sources/audit_log_subscription#resources DataLaunchdarklyAuditLogSubscription#resources}

---

## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyAuditLogSubscriptionStatementsList <a name="DataLaunchdarklyAuditLogSubscriptionStatementsList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_audit_log_subscription

dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataLaunchdarklyAuditLogSubscriptionStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a>]]

---


### DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference <a name="DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_audit_log_subscription

dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resetNotActions">reset_not_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resetNotResources">reset_not_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_not_actions` <a name="reset_not_actions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resetNotActions"></a>

```python
def reset_not_actions() -> None
```

##### `reset_not_resources` <a name="reset_not_resources" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resetNotResources"></a>

```python
def reset_not_resources() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notActionsInput">not_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notResourcesInput">not_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `not_actions_input`<sup>Optional</sup> <a name="not_actions_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notActionsInput"></a>

```python
not_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_resources_input`<sup>Optional</sup> <a name="not_resources_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notResourcesInput"></a>

```python
not_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `not_actions`<sup>Required</sup> <a name="not_actions" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_resources`<sup>Required</sup> <a name="not_resources" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatementsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataLaunchdarklyAuditLogSubscriptionStatements]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyAuditLogSubscription.DataLaunchdarklyAuditLogSubscriptionStatements">DataLaunchdarklyAuditLogSubscriptionStatements</a>]

---



