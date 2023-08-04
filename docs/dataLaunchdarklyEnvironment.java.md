# `data_launchdarkly_environment`

Refer to the Terraform Registory for docs: [`data_launchdarkly_environment`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment).

# `dataLaunchdarklyEnvironment` Submodule <a name="`dataLaunchdarklyEnvironment` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyEnvironment <a name="DataLaunchdarklyEnvironment" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment launchdarkly_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_environment.DataLaunchdarklyEnvironment;

DataLaunchdarklyEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .key(java.lang.String)
    .projectKey(java.lang.String)
//  .approvalSettings(IResolvable)
//  .approvalSettings(java.util.List<DataLaunchdarklyEnvironmentApprovalSettings>)
//  .confirmChanges(java.lang.Boolean)
//  .confirmChanges(IResolvable)
//  .defaultTrackEvents(java.lang.Boolean)
//  .defaultTrackEvents(IResolvable)
//  .defaultTtl(java.lang.Number)
//  .id(java.lang.String)
//  .requireComments(java.lang.Boolean)
//  .requireComments(IResolvable)
//  .secureMode(java.lang.Boolean)
//  .secureMode(IResolvable)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | A project-unique key for the new environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.projectKey">projectKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#project_key DataLaunchdarklyEnvironment#project_key}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.approvalSettings">approvalSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings">DataLaunchdarklyEnvironmentApprovalSettings</a>></code> | approval_settings block. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.confirmChanges">confirmChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to require confirmation for flag and segment changes in this environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.defaultTrackEvents">defaultTrackEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to default to sending data export events for flags created in the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | The TTL for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#id DataLaunchdarklyEnvironment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.requireComments">requireComments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to require comments for flag and segment changes in this environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.secureMode">secureMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to use secure mode. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags associated with your resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.key"></a>

- *Type:* java.lang.String

A project-unique key for the new environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#key DataLaunchdarklyEnvironment#key}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.projectKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#project_key DataLaunchdarklyEnvironment#project_key}.

---

##### `approvalSettings`<sup>Optional</sup> <a name="approvalSettings" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.approvalSettings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings">DataLaunchdarklyEnvironmentApprovalSettings</a>>

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#approval_settings DataLaunchdarklyEnvironment#approval_settings}

---

##### `confirmChanges`<sup>Optional</sup> <a name="confirmChanges" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.confirmChanges"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to require confirmation for flag and segment changes in this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#confirm_changes DataLaunchdarklyEnvironment#confirm_changes}

---

##### `defaultTrackEvents`<sup>Optional</sup> <a name="defaultTrackEvents" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.defaultTrackEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to default to sending data export events for flags created in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#default_track_events DataLaunchdarklyEnvironment#default_track_events}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.defaultTtl"></a>

- *Type:* java.lang.Number

The TTL for the environment.

This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#default_ttl DataLaunchdarklyEnvironment#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#id DataLaunchdarklyEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requireComments`<sup>Optional</sup> <a name="requireComments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.requireComments"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to require comments for flag and segment changes in this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#require_comments DataLaunchdarklyEnvironment#require_comments}

---

##### `secureMode`<sup>Optional</sup> <a name="secureMode" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.secureMode"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to use secure mode.

Secure mode ensures a user of the client-side SDK cannot impersonate another user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#secure_mode DataLaunchdarklyEnvironment#secure_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#tags DataLaunchdarklyEnvironment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.putApprovalSettings">putApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetApprovalSettings">resetApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetConfirmChanges">resetConfirmChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetDefaultTrackEvents">resetDefaultTrackEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetRequireComments">resetRequireComments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetSecureMode">resetSecureMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putApprovalSettings` <a name="putApprovalSettings" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.putApprovalSettings"></a>

```java
public void putApprovalSettings(IResolvable OR java.util.List<DataLaunchdarklyEnvironmentApprovalSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.putApprovalSettings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings">DataLaunchdarklyEnvironmentApprovalSettings</a>>

---

##### `resetApprovalSettings` <a name="resetApprovalSettings" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetApprovalSettings"></a>

```java
public void resetApprovalSettings()
```

##### `resetConfirmChanges` <a name="resetConfirmChanges" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetConfirmChanges"></a>

```java
public void resetConfirmChanges()
```

##### `resetDefaultTrackEvents` <a name="resetDefaultTrackEvents" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetDefaultTrackEvents"></a>

```java
public void resetDefaultTrackEvents()
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetDefaultTtl"></a>

```java
public void resetDefaultTtl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetId"></a>

```java
public void resetId()
```

##### `resetRequireComments` <a name="resetRequireComments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetRequireComments"></a>

```java
public void resetRequireComments()
```

##### `resetSecureMode` <a name="resetSecureMode" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetSecureMode"></a>

```java
public void resetSecureMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_environment.DataLaunchdarklyEnvironment;

DataLaunchdarklyEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_environment.DataLaunchdarklyEnvironment;

DataLaunchdarklyEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_environment.DataLaunchdarklyEnvironment;

DataLaunchdarklyEnvironment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.approvalSettings">approvalSettings</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList">DataLaunchdarklyEnvironmentApprovalSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.clientSideId">clientSideId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.color">color</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.mobileKey">mobileKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.approvalSettingsInput">approvalSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings">DataLaunchdarklyEnvironmentApprovalSettings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.confirmChangesInput">confirmChangesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTrackEventsInput">defaultTrackEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTtlInput">defaultTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.projectKeyInput">projectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.requireCommentsInput">requireCommentsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.secureModeInput">secureModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.confirmChanges">confirmChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTrackEvents">defaultTrackEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.requireComments">requireComments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.secureMode">secureMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `approvalSettings`<sup>Required</sup> <a name="approvalSettings" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.approvalSettings"></a>

```java
public DataLaunchdarklyEnvironmentApprovalSettingsList getApprovalSettings();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList">DataLaunchdarklyEnvironmentApprovalSettingsList</a>

---

##### `clientSideId`<sup>Required</sup> <a name="clientSideId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.clientSideId"></a>

```java
public java.lang.String getClientSideId();
```

- *Type:* java.lang.String

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.color"></a>

```java
public java.lang.String getColor();
```

- *Type:* java.lang.String

---

##### `mobileKey`<sup>Required</sup> <a name="mobileKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.mobileKey"></a>

```java
public java.lang.String getMobileKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `approvalSettingsInput`<sup>Optional</sup> <a name="approvalSettingsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.approvalSettingsInput"></a>

```java
public java.lang.Object getApprovalSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings">DataLaunchdarklyEnvironmentApprovalSettings</a>>

---

##### `confirmChangesInput`<sup>Optional</sup> <a name="confirmChangesInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.confirmChangesInput"></a>

```java
public java.lang.Object getConfirmChangesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTrackEventsInput`<sup>Optional</sup> <a name="defaultTrackEventsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTrackEventsInput"></a>

```java
public java.lang.Object getDefaultTrackEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTtlInput"></a>

```java
public java.lang.Number getDefaultTtlInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.projectKeyInput"></a>

```java
public java.lang.String getProjectKeyInput();
```

- *Type:* java.lang.String

---

##### `requireCommentsInput`<sup>Optional</sup> <a name="requireCommentsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.requireCommentsInput"></a>

```java
public java.lang.Object getRequireCommentsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secureModeInput`<sup>Optional</sup> <a name="secureModeInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.secureModeInput"></a>

```java
public java.lang.Object getSecureModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `confirmChanges`<sup>Required</sup> <a name="confirmChanges" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.confirmChanges"></a>

```java
public java.lang.Object getConfirmChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTrackEvents`<sup>Required</sup> <a name="defaultTrackEvents" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTrackEvents"></a>

```java
public java.lang.Object getDefaultTrackEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

---

##### `requireComments`<sup>Required</sup> <a name="requireComments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.requireComments"></a>

```java
public java.lang.Object getRequireComments();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secureMode`<sup>Required</sup> <a name="secureMode" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.secureMode"></a>

```java
public java.lang.Object getSecureMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyEnvironmentApprovalSettings <a name="DataLaunchdarklyEnvironmentApprovalSettings" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_environment.DataLaunchdarklyEnvironmentApprovalSettings;

DataLaunchdarklyEnvironmentApprovalSettings.builder()
//  .canApplyDeclinedChanges(java.lang.Boolean)
//  .canApplyDeclinedChanges(IResolvable)
//  .canReviewOwnRequest(java.lang.Boolean)
//  .canReviewOwnRequest(IResolvable)
//  .minNumApprovals(java.lang.Number)
//  .required(java.lang.Boolean)
//  .required(IResolvable)
//  .requiredApprovalTags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.canApplyDeclinedChanges">canApplyDeclinedChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether changes can be applied as long as minNumApprovals is met, regardless of whether any reviewers have declined a request. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.canReviewOwnRequest">canReviewOwnRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether requesters can approve or decline their own request. They may always comment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.minNumApprovals">minNumApprovals</a></code> | <code>java.lang.Number</code> | The number of approvals required before an approval request can be applied. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether any changes to flags in this environment will require approval. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.requiredApprovalTags">requiredApprovalTags</a></code> | <code>java.util.List<java.lang.String></code> | An array of tags used to specify which flags with those tags require approval. |

---

##### `canApplyDeclinedChanges`<sup>Optional</sup> <a name="canApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.canApplyDeclinedChanges"></a>

```java
public java.lang.Object getCanApplyDeclinedChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether changes can be applied as long as minNumApprovals is met, regardless of whether any reviewers have declined a request.

Defaults to true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#can_apply_declined_changes DataLaunchdarklyEnvironment#can_apply_declined_changes}

---

##### `canReviewOwnRequest`<sup>Optional</sup> <a name="canReviewOwnRequest" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.canReviewOwnRequest"></a>

```java
public java.lang.Object getCanReviewOwnRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether requesters can approve or decline their own request. They may always comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#can_review_own_request DataLaunchdarklyEnvironment#can_review_own_request}

---

##### `minNumApprovals`<sup>Optional</sup> <a name="minNumApprovals" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.minNumApprovals"></a>

```java
public java.lang.Number getMinNumApprovals();
```

- *Type:* java.lang.Number

The number of approvals required before an approval request can be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#min_num_approvals DataLaunchdarklyEnvironment#min_num_approvals}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether any changes to flags in this environment will require approval.

You may only set required or requiredApprovalTags, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#required DataLaunchdarklyEnvironment#required}

---

##### `requiredApprovalTags`<sup>Optional</sup> <a name="requiredApprovalTags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings.property.requiredApprovalTags"></a>

```java
public java.util.List<java.lang.String> getRequiredApprovalTags();
```

- *Type:* java.util.List<java.lang.String>

An array of tags used to specify which flags with those tags require approval.

You may only set requiredApprovalTags or required, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#required_approval_tags DataLaunchdarklyEnvironment#required_approval_tags}

---

### DataLaunchdarklyEnvironmentConfig <a name="DataLaunchdarklyEnvironmentConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_environment.DataLaunchdarklyEnvironmentConfig;

DataLaunchdarklyEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .key(java.lang.String)
    .projectKey(java.lang.String)
//  .approvalSettings(IResolvable)
//  .approvalSettings(java.util.List<DataLaunchdarklyEnvironmentApprovalSettings>)
//  .confirmChanges(java.lang.Boolean)
//  .confirmChanges(IResolvable)
//  .defaultTrackEvents(java.lang.Boolean)
//  .defaultTrackEvents(IResolvable)
//  .defaultTtl(java.lang.Number)
//  .id(java.lang.String)
//  .requireComments(java.lang.Boolean)
//  .requireComments(IResolvable)
//  .secureMode(java.lang.Boolean)
//  .secureMode(IResolvable)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.key">key</a></code> | <code>java.lang.String</code> | A project-unique key for the new environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#project_key DataLaunchdarklyEnvironment#project_key}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.approvalSettings">approvalSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings">DataLaunchdarklyEnvironmentApprovalSettings</a>></code> | approval_settings block. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.confirmChanges">confirmChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to require confirmation for flag and segment changes in this environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.defaultTrackEvents">defaultTrackEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to default to sending data export events for flags created in the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | The TTL for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#id DataLaunchdarklyEnvironment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.requireComments">requireComments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to require comments for flag and segment changes in this environment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.secureMode">secureMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to use secure mode. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags associated with your resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A project-unique key for the new environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#key DataLaunchdarklyEnvironment#key}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#project_key DataLaunchdarklyEnvironment#project_key}.

---

##### `approvalSettings`<sup>Optional</sup> <a name="approvalSettings" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.approvalSettings"></a>

```java
public java.lang.Object getApprovalSettings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings">DataLaunchdarklyEnvironmentApprovalSettings</a>>

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#approval_settings DataLaunchdarklyEnvironment#approval_settings}

---

##### `confirmChanges`<sup>Optional</sup> <a name="confirmChanges" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.confirmChanges"></a>

```java
public java.lang.Object getConfirmChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to require confirmation for flag and segment changes in this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#confirm_changes DataLaunchdarklyEnvironment#confirm_changes}

---

##### `defaultTrackEvents`<sup>Optional</sup> <a name="defaultTrackEvents" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.defaultTrackEvents"></a>

```java
public java.lang.Object getDefaultTrackEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to default to sending data export events for flags created in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#default_track_events DataLaunchdarklyEnvironment#default_track_events}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

The TTL for the environment.

This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#default_ttl DataLaunchdarklyEnvironment#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#id DataLaunchdarklyEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requireComments`<sup>Optional</sup> <a name="requireComments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.requireComments"></a>

```java
public java.lang.Object getRequireComments();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to require comments for flag and segment changes in this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#require_comments DataLaunchdarklyEnvironment#require_comments}

---

##### `secureMode`<sup>Optional</sup> <a name="secureMode" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.secureMode"></a>

```java
public java.lang.Object getSecureMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to use secure mode.

Secure mode ensures a user of the client-side SDK cannot impersonate another user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#secure_mode DataLaunchdarklyEnvironment#secure_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/data-sources/environment#tags DataLaunchdarklyEnvironment#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyEnvironmentApprovalSettingsList <a name="DataLaunchdarklyEnvironmentApprovalSettingsList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_environment.DataLaunchdarklyEnvironmentApprovalSettingsList;

new DataLaunchdarklyEnvironmentApprovalSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.get"></a>

```java
public DataLaunchdarklyEnvironmentApprovalSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings">DataLaunchdarklyEnvironmentApprovalSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings">DataLaunchdarklyEnvironmentApprovalSettings</a>>

---


### DataLaunchdarklyEnvironmentApprovalSettingsOutputReference <a name="DataLaunchdarklyEnvironmentApprovalSettingsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_environment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference;

new DataLaunchdarklyEnvironmentApprovalSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetCanApplyDeclinedChanges">resetCanApplyDeclinedChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetCanReviewOwnRequest">resetCanReviewOwnRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetMinNumApprovals">resetMinNumApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetRequiredApprovalTags">resetRequiredApprovalTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCanApplyDeclinedChanges` <a name="resetCanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetCanApplyDeclinedChanges"></a>

```java
public void resetCanApplyDeclinedChanges()
```

##### `resetCanReviewOwnRequest` <a name="resetCanReviewOwnRequest" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetCanReviewOwnRequest"></a>

```java
public void resetCanReviewOwnRequest()
```

##### `resetMinNumApprovals` <a name="resetMinNumApprovals" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetMinNumApprovals"></a>

```java
public void resetMinNumApprovals()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetRequiredApprovalTags` <a name="resetRequiredApprovalTags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.resetRequiredApprovalTags"></a>

```java
public void resetRequiredApprovalTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput">canApplyDeclinedChangesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequestInput">canReviewOwnRequestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.minNumApprovalsInput">minNumApprovalsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.requiredApprovalTagsInput">requiredApprovalTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChanges">canApplyDeclinedChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequest">canReviewOwnRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.minNumApprovals">minNumApprovals</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.requiredApprovalTags">requiredApprovalTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings">DataLaunchdarklyEnvironmentApprovalSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canApplyDeclinedChangesInput`<sup>Optional</sup> <a name="canApplyDeclinedChangesInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput"></a>

```java
public java.lang.Object getCanApplyDeclinedChangesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `canReviewOwnRequestInput`<sup>Optional</sup> <a name="canReviewOwnRequestInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequestInput"></a>

```java
public java.lang.Object getCanReviewOwnRequestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minNumApprovalsInput`<sup>Optional</sup> <a name="minNumApprovalsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.minNumApprovalsInput"></a>

```java
public java.lang.Number getMinNumApprovalsInput();
```

- *Type:* java.lang.Number

---

##### `requiredApprovalTagsInput`<sup>Optional</sup> <a name="requiredApprovalTagsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.requiredApprovalTagsInput"></a>

```java
public java.util.List<java.lang.String> getRequiredApprovalTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.requiredInput"></a>

```java
public java.lang.Object getRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `canApplyDeclinedChanges`<sup>Required</sup> <a name="canApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChanges"></a>

```java
public java.lang.Object getCanApplyDeclinedChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `canReviewOwnRequest`<sup>Required</sup> <a name="canReviewOwnRequest" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequest"></a>

```java
public java.lang.Object getCanReviewOwnRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minNumApprovals`<sup>Required</sup> <a name="minNumApprovals" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.minNumApprovals"></a>

```java
public java.lang.Number getMinNumApprovals();
```

- *Type:* java.lang.Number

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requiredApprovalTags`<sup>Required</sup> <a name="requiredApprovalTags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.requiredApprovalTags"></a>

```java
public java.util.List<java.lang.String> getRequiredApprovalTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyEnvironment.DataLaunchdarklyEnvironmentApprovalSettings">DataLaunchdarklyEnvironmentApprovalSettings</a>

---



