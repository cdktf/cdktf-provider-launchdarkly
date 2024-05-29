# `environment` Submodule <a name="`environment` Submodule" id="@cdktf/provider-launchdarkly.environment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Environment <a name="Environment" id="@cdktf/provider-launchdarkly.environment.Environment"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment launchdarkly_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.environment.Environment;

Environment.Builder.create(Construct scope, java.lang.String id)
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
    .color(java.lang.String)
    .key(java.lang.String)
    .name(java.lang.String)
    .projectKey(java.lang.String)
//  .approvalSettings(IResolvable)
//  .approvalSettings(java.util.List<EnvironmentApprovalSettings>)
//  .confirmChanges(java.lang.Boolean)
//  .confirmChanges(IResolvable)
//  .critical(java.lang.Boolean)
//  .critical(IResolvable)
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
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.color">color</a></code> | <code>java.lang.String</code> | The color swatch as an RGB hex value with no leading `#`. For example: `000000`. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | The project-unique key for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.projectKey">projectKey</a></code> | <code>java.lang.String</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.approvalSettings">approvalSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>></code> | approval_settings block. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.confirmChanges">confirmChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` if this environment requires confirmation for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the environment is critical. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.defaultTrackEvents">defaultTrackEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to enable data export for every flag created in this environment after you configure this argument. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | The TTL for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#id Environment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.requireComments">requireComments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` if this environment requires comments for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.secureMode">secureMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to ensure a user of the client-side SDK cannot impersonate another user. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags associated with your resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.color"></a>

- *Type:* java.lang.String

The color swatch as an RGB hex value with no leading `#`. For example: `000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#color Environment#color}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.key"></a>

- *Type:* java.lang.String

The project-unique key for the environment.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#key Environment#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#name Environment#name}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.projectKey"></a>

- *Type:* java.lang.String

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#project_key Environment#project_key}

---

##### `approvalSettings`<sup>Optional</sup> <a name="approvalSettings" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.approvalSettings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>>

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#approval_settings Environment#approval_settings}

---

##### `confirmChanges`<sup>Optional</sup> <a name="confirmChanges" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.confirmChanges"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` if this environment requires confirmation for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#confirm_changes Environment#confirm_changes}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.critical"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the environment is critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#critical Environment#critical}

---

##### `defaultTrackEvents`<sup>Optional</sup> <a name="defaultTrackEvents" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.defaultTrackEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to enable data export for every flag created in this environment after you configure this argument.

This field will default to `false` when not set. To learn more, read [Data Export](https://docs.launchdarkly.com/home/data-export).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#default_track_events Environment#default_track_events}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.defaultTtl"></a>

- *Type:* java.lang.Number

The TTL for the environment.

This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK. This field will default to `0` when not set. To learn more, read [TTL settings](https://docs.launchdarkly.com/home/organize/environments#ttl-settings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#default_ttl Environment#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#id Environment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requireComments`<sup>Optional</sup> <a name="requireComments" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.requireComments"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` if this environment requires comments for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#require_comments Environment#require_comments}

---

##### `secureMode`<sup>Optional</sup> <a name="secureMode" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.secureMode"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to ensure a user of the client-side SDK cannot impersonate another user.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#secure_mode Environment#secure_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#tags Environment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.putApprovalSettings">putApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetApprovalSettings">resetApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetConfirmChanges">resetConfirmChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetCritical">resetCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTrackEvents">resetDefaultTrackEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetRequireComments">resetRequireComments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetSecureMode">resetSecureMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.environment.Environment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.environment.Environment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.environment.Environment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.environment.Environment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.environment.Environment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.environment.Environment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.environment.Environment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.environment.Environment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.environment.Environment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.environment.Environment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-launchdarkly.environment.Environment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.environment.Environment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-launchdarkly.environment.Environment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-launchdarkly.environment.Environment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.environment.Environment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.environment.Environment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.Environment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-launchdarkly.environment.Environment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.environment.Environment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-launchdarkly.environment.Environment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.environment.Environment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.environment.Environment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-launchdarkly.environment.Environment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.environment.Environment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalSettings` <a name="putApprovalSettings" id="@cdktf/provider-launchdarkly.environment.Environment.putApprovalSettings"></a>

```java
public void putApprovalSettings(IResolvable OR java.util.List<EnvironmentApprovalSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.environment.Environment.putApprovalSettings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>>

---

##### `resetApprovalSettings` <a name="resetApprovalSettings" id="@cdktf/provider-launchdarkly.environment.Environment.resetApprovalSettings"></a>

```java
public void resetApprovalSettings()
```

##### `resetConfirmChanges` <a name="resetConfirmChanges" id="@cdktf/provider-launchdarkly.environment.Environment.resetConfirmChanges"></a>

```java
public void resetConfirmChanges()
```

##### `resetCritical` <a name="resetCritical" id="@cdktf/provider-launchdarkly.environment.Environment.resetCritical"></a>

```java
public void resetCritical()
```

##### `resetDefaultTrackEvents` <a name="resetDefaultTrackEvents" id="@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTrackEvents"></a>

```java
public void resetDefaultTrackEvents()
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTtl"></a>

```java
public void resetDefaultTtl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.environment.Environment.resetId"></a>

```java
public void resetId()
```

##### `resetRequireComments` <a name="resetRequireComments" id="@cdktf/provider-launchdarkly.environment.Environment.resetRequireComments"></a>

```java
public void resetRequireComments()
```

##### `resetSecureMode` <a name="resetSecureMode" id="@cdktf/provider-launchdarkly.environment.Environment.resetSecureMode"></a>

```java
public void resetSecureMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-launchdarkly.environment.Environment.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.environment.Environment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.environment.Environment;

Environment.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.environment.Environment;

Environment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.environment.Environment;

Environment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.environment.Environment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.environment.Environment;

Environment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Environment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.environment.Environment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.environment.Environment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Environment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.environment.Environment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Environment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.environment.Environment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Environment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettings">approvalSettings</a></code> | <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList">EnvironmentApprovalSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.clientSideId">clientSideId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.mobileKey">mobileKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettingsInput">approvalSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.colorInput">colorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.confirmChangesInput">confirmChangesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.criticalInput">criticalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEventsInput">defaultTrackEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtlInput">defaultTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.projectKeyInput">projectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.requireCommentsInput">requireCommentsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.secureModeInput">secureModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.color">color</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.confirmChanges">confirmChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEvents">defaultTrackEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.requireComments">requireComments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.secureMode">secureMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.environment.Environment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.environment.Environment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.environment.Environment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.environment.Environment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.environment.Environment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.environment.Environment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.environment.Environment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.environment.Environment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.environment.Environment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.environment.Environment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.environment.Environment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.environment.Environment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.environment.Environment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.environment.Environment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-launchdarkly.environment.Environment.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `approvalSettings`<sup>Required</sup> <a name="approvalSettings" id="@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettings"></a>

```java
public EnvironmentApprovalSettingsList getApprovalSettings();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList">EnvironmentApprovalSettingsList</a>

---

##### `clientSideId`<sup>Required</sup> <a name="clientSideId" id="@cdktf/provider-launchdarkly.environment.Environment.property.clientSideId"></a>

```java
public java.lang.String getClientSideId();
```

- *Type:* java.lang.String

---

##### `mobileKey`<sup>Required</sup> <a name="mobileKey" id="@cdktf/provider-launchdarkly.environment.Environment.property.mobileKey"></a>

```java
public java.lang.String getMobileKey();
```

- *Type:* java.lang.String

---

##### `approvalSettingsInput`<sup>Optional</sup> <a name="approvalSettingsInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettingsInput"></a>

```java
public java.lang.Object getApprovalSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>>

---

##### `colorInput`<sup>Optional</sup> <a name="colorInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.colorInput"></a>

```java
public java.lang.String getColorInput();
```

- *Type:* java.lang.String

---

##### `confirmChangesInput`<sup>Optional</sup> <a name="confirmChangesInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.confirmChangesInput"></a>

```java
public java.lang.Object getConfirmChangesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.criticalInput"></a>

```java
public java.lang.Object getCriticalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTrackEventsInput`<sup>Optional</sup> <a name="defaultTrackEventsInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEventsInput"></a>

```java
public java.lang.Object getDefaultTrackEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtlInput"></a>

```java
public java.lang.Number getDefaultTtlInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.projectKeyInput"></a>

```java
public java.lang.String getProjectKeyInput();
```

- *Type:* java.lang.String

---

##### `requireCommentsInput`<sup>Optional</sup> <a name="requireCommentsInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.requireCommentsInput"></a>

```java
public java.lang.Object getRequireCommentsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secureModeInput`<sup>Optional</sup> <a name="secureModeInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.secureModeInput"></a>

```java
public java.lang.Object getSecureModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-launchdarkly.environment.Environment.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-launchdarkly.environment.Environment.property.color"></a>

```java
public java.lang.String getColor();
```

- *Type:* java.lang.String

---

##### `confirmChanges`<sup>Required</sup> <a name="confirmChanges" id="@cdktf/provider-launchdarkly.environment.Environment.property.confirmChanges"></a>

```java
public java.lang.Object getConfirmChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-launchdarkly.environment.Environment.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTrackEvents`<sup>Required</sup> <a name="defaultTrackEvents" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEvents"></a>

```java
public java.lang.Object getDefaultTrackEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.environment.Environment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.environment.Environment.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.environment.Environment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.environment.Environment.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

---

##### `requireComments`<sup>Required</sup> <a name="requireComments" id="@cdktf/provider-launchdarkly.environment.Environment.property.requireComments"></a>

```java
public java.lang.Object getRequireComments();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secureMode`<sup>Required</sup> <a name="secureMode" id="@cdktf/provider-launchdarkly.environment.Environment.property.secureMode"></a>

```java
public java.lang.Object getSecureMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.environment.Environment.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.environment.Environment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EnvironmentApprovalSettings <a name="EnvironmentApprovalSettings" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.environment.EnvironmentApprovalSettings;

EnvironmentApprovalSettings.builder()
//  .canApplyDeclinedChanges(java.lang.Boolean)
//  .canApplyDeclinedChanges(IResolvable)
//  .canReviewOwnRequest(java.lang.Boolean)
//  .canReviewOwnRequest(IResolvable)
//  .minNumApprovals(java.lang.Number)
//  .required(java.lang.Boolean)
//  .required(IResolvable)
//  .requiredApprovalTags(java.util.List<java.lang.String>)
//  .serviceConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .serviceKind(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canApplyDeclinedChanges">canApplyDeclinedChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canReviewOwnRequest">canReviewOwnRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.minNumApprovals">minNumApprovals</a></code> | <code>java.lang.Number</code> | The number of approvals required before an approval request can be applied. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` for changes to flags in this environment to require approval. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.requiredApprovalTags">requiredApprovalTags</a></code> | <code>java.util.List<java.lang.String></code> | An array of tags used to specify which flags with those tags require approval. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.serviceConfig">serviceConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The configuration for the service associated with this approval. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.serviceKind">serviceKind</a></code> | <code>java.lang.String</code> | The kind of service associated with this approval. |

---

##### `canApplyDeclinedChanges`<sup>Optional</sup> <a name="canApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canApplyDeclinedChanges"></a>

```java
public java.lang.Object getCanApplyDeclinedChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request.

Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#can_apply_declined_changes Environment#can_apply_declined_changes}

---

##### `canReviewOwnRequest`<sup>Optional</sup> <a name="canReviewOwnRequest" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canReviewOwnRequest"></a>

```java
public java.lang.Object getCanReviewOwnRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#can_review_own_request Environment#can_review_own_request}

---

##### `minNumApprovals`<sup>Optional</sup> <a name="minNumApprovals" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.minNumApprovals"></a>

```java
public java.lang.Number getMinNumApprovals();
```

- *Type:* java.lang.Number

The number of approvals required before an approval request can be applied.

This number must be between 1 and 5. Defaults to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#min_num_approvals Environment#min_num_approvals}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` for changes to flags in this environment to require approval.

You may only set `required` to true if `required_approval_tags` is not set and vice versa. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#required Environment#required}

---

##### `requiredApprovalTags`<sup>Optional</sup> <a name="requiredApprovalTags" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.requiredApprovalTags"></a>

```java
public java.util.List<java.lang.String> getRequiredApprovalTags();
```

- *Type:* java.util.List<java.lang.String>

An array of tags used to specify which flags with those tags require approval.

You may only set `required_approval_tags` if `required` is not set to `true` and vice versa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#required_approval_tags Environment#required_approval_tags}

---

##### `serviceConfig`<sup>Optional</sup> <a name="serviceConfig" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.serviceConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The configuration for the service associated with this approval.

This is specific to each approval service. For a `service_kind` of `servicenow`, the following fields apply:

```
 - `template` (String) The sys_id of the Standard Change Request Template in ServiceNow that LaunchDarkly will use when creating the change request.
 - `detail_column` (String) The name of the ServiceNow Change Request column LaunchDarkly uses to populate detailed approval request information.
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#service_config Environment#service_config}

---

##### `serviceKind`<sup>Optional</sup> <a name="serviceKind" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.serviceKind"></a>

```java
public java.lang.String getServiceKind();
```

- *Type:* java.lang.String

The kind of service associated with this approval.

This determines which platform is used for requesting approval. Valid values are `servicenow`, `launchdarkly`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#service_kind Environment#service_kind}

---

### EnvironmentConfig <a name="EnvironmentConfig" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.environment.EnvironmentConfig;

EnvironmentConfig.builder()
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
    .color(java.lang.String)
    .key(java.lang.String)
    .name(java.lang.String)
    .projectKey(java.lang.String)
//  .approvalSettings(IResolvable)
//  .approvalSettings(java.util.List<EnvironmentApprovalSettings>)
//  .confirmChanges(java.lang.Boolean)
//  .confirmChanges(IResolvable)
//  .critical(java.lang.Boolean)
//  .critical(IResolvable)
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
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.color">color</a></code> | <code>java.lang.String</code> | The color swatch as an RGB hex value with no leading `#`. For example: `000000`. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.key">key</a></code> | <code>java.lang.String</code> | The project-unique key for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.approvalSettings">approvalSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>></code> | approval_settings block. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.confirmChanges">confirmChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` if this environment requires confirmation for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the environment is critical. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTrackEvents">defaultTrackEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to enable data export for every flag created in this environment after you configure this argument. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | The TTL for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#id Environment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.requireComments">requireComments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` if this environment requires comments for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.secureMode">secureMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to ensure a user of the client-side SDK cannot impersonate another user. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags associated with your resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.color"></a>

```java
public java.lang.String getColor();
```

- *Type:* java.lang.String

The color swatch as an RGB hex value with no leading `#`. For example: `000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#color Environment#color}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The project-unique key for the environment.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#key Environment#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#name Environment#name}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#project_key Environment#project_key}

---

##### `approvalSettings`<sup>Optional</sup> <a name="approvalSettings" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.approvalSettings"></a>

```java
public java.lang.Object getApprovalSettings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>>

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#approval_settings Environment#approval_settings}

---

##### `confirmChanges`<sup>Optional</sup> <a name="confirmChanges" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.confirmChanges"></a>

```java
public java.lang.Object getConfirmChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` if this environment requires confirmation for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#confirm_changes Environment#confirm_changes}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the environment is critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#critical Environment#critical}

---

##### `defaultTrackEvents`<sup>Optional</sup> <a name="defaultTrackEvents" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTrackEvents"></a>

```java
public java.lang.Object getDefaultTrackEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to enable data export for every flag created in this environment after you configure this argument.

This field will default to `false` when not set. To learn more, read [Data Export](https://docs.launchdarkly.com/home/data-export).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#default_track_events Environment#default_track_events}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

The TTL for the environment.

This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK. This field will default to `0` when not set. To learn more, read [TTL settings](https://docs.launchdarkly.com/home/organize/environments#ttl-settings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#default_ttl Environment#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#id Environment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requireComments`<sup>Optional</sup> <a name="requireComments" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.requireComments"></a>

```java
public java.lang.Object getRequireComments();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` if this environment requires comments for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#require_comments Environment#require_comments}

---

##### `secureMode`<sup>Optional</sup> <a name="secureMode" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.secureMode"></a>

```java
public java.lang.Object getSecureMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to ensure a user of the client-side SDK cannot impersonate another user.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#secure_mode Environment#secure_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/resources/environment#tags Environment#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### EnvironmentApprovalSettingsList <a name="EnvironmentApprovalSettingsList" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.environment.EnvironmentApprovalSettingsList;

new EnvironmentApprovalSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.get"></a>

```java
public EnvironmentApprovalSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>>

---


### EnvironmentApprovalSettingsOutputReference <a name="EnvironmentApprovalSettingsOutputReference" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.environment.EnvironmentApprovalSettingsOutputReference;

new EnvironmentApprovalSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanApplyDeclinedChanges">resetCanApplyDeclinedChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanReviewOwnRequest">resetCanReviewOwnRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetMinNumApprovals">resetMinNumApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequiredApprovalTags">resetRequiredApprovalTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetServiceConfig">resetServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetServiceKind">resetServiceKind</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCanApplyDeclinedChanges` <a name="resetCanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanApplyDeclinedChanges"></a>

```java
public void resetCanApplyDeclinedChanges()
```

##### `resetCanReviewOwnRequest` <a name="resetCanReviewOwnRequest" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanReviewOwnRequest"></a>

```java
public void resetCanReviewOwnRequest()
```

##### `resetMinNumApprovals` <a name="resetMinNumApprovals" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetMinNumApprovals"></a>

```java
public void resetMinNumApprovals()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetRequiredApprovalTags` <a name="resetRequiredApprovalTags" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequiredApprovalTags"></a>

```java
public void resetRequiredApprovalTags()
```

##### `resetServiceConfig` <a name="resetServiceConfig" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetServiceConfig"></a>

```java
public void resetServiceConfig()
```

##### `resetServiceKind` <a name="resetServiceKind" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetServiceKind"></a>

```java
public void resetServiceKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput">canApplyDeclinedChangesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequestInput">canReviewOwnRequestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovalsInput">minNumApprovalsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTagsInput">requiredApprovalTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.serviceConfigInput">serviceConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.serviceKindInput">serviceKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChanges">canApplyDeclinedChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequest">canReviewOwnRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovals">minNumApprovals</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTags">requiredApprovalTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.serviceConfig">serviceConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.serviceKind">serviceKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canApplyDeclinedChangesInput`<sup>Optional</sup> <a name="canApplyDeclinedChangesInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput"></a>

```java
public java.lang.Object getCanApplyDeclinedChangesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `canReviewOwnRequestInput`<sup>Optional</sup> <a name="canReviewOwnRequestInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequestInput"></a>

```java
public java.lang.Object getCanReviewOwnRequestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minNumApprovalsInput`<sup>Optional</sup> <a name="minNumApprovalsInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovalsInput"></a>

```java
public java.lang.Number getMinNumApprovalsInput();
```

- *Type:* java.lang.Number

---

##### `requiredApprovalTagsInput`<sup>Optional</sup> <a name="requiredApprovalTagsInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTagsInput"></a>

```java
public java.util.List<java.lang.String> getRequiredApprovalTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredInput"></a>

```java
public java.lang.Object getRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceConfigInput`<sup>Optional</sup> <a name="serviceConfigInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.serviceConfigInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceKindInput`<sup>Optional</sup> <a name="serviceKindInput" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.serviceKindInput"></a>

```java
public java.lang.String getServiceKindInput();
```

- *Type:* java.lang.String

---

##### `canApplyDeclinedChanges`<sup>Required</sup> <a name="canApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChanges"></a>

```java
public java.lang.Object getCanApplyDeclinedChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `canReviewOwnRequest`<sup>Required</sup> <a name="canReviewOwnRequest" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequest"></a>

```java
public java.lang.Object getCanReviewOwnRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minNumApprovals`<sup>Required</sup> <a name="minNumApprovals" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovals"></a>

```java
public java.lang.Number getMinNumApprovals();
```

- *Type:* java.lang.Number

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requiredApprovalTags`<sup>Required</sup> <a name="requiredApprovalTags" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTags"></a>

```java
public java.util.List<java.lang.String> getRequiredApprovalTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.serviceConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceKind`<sup>Required</sup> <a name="serviceKind" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.serviceKind"></a>

```java
public java.lang.String getServiceKind();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>

---



