# `dataLaunchdarklyTeam` Submodule <a name="`dataLaunchdarklyTeam` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyTeam <a name="DataLaunchdarklyTeam" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team launchdarkly_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_team.DataLaunchdarklyTeam;

DataLaunchdarklyTeam.Builder.create(Construct scope, java.lang.String id)
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
//  .customRoleKeys(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | The team's unique key. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.customRoleKeys">customRoleKeys</a></code> | <code>java.util.List<java.lang.String></code> | A list of keys for custom roles the team has. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The team's description. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team#id DataLaunchdarklyTeam#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The team's human-readable name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.key"></a>

- *Type:* java.lang.String

The team's unique key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team#key DataLaunchdarklyTeam#key}

---

##### `customRoleKeys`<sup>Optional</sup> <a name="customRoleKeys" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.customRoleKeys"></a>

- *Type:* java.util.List<java.lang.String>

A list of keys for custom roles the team has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team#custom_role_keys DataLaunchdarklyTeam#custom_role_keys}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The team's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team#description DataLaunchdarklyTeam#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team#id DataLaunchdarklyTeam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The team's human-readable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team#name DataLaunchdarklyTeam#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetCustomRoleKeys">resetCustomRoleKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCustomRoleKeys` <a name="resetCustomRoleKeys" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetCustomRoleKeys"></a>

```java
public void resetCustomRoleKeys()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataLaunchdarklyTeam resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_team.DataLaunchdarklyTeam;

DataLaunchdarklyTeam.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_team.DataLaunchdarklyTeam;

DataLaunchdarklyTeam.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_team.DataLaunchdarklyTeam;

DataLaunchdarklyTeam.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_team.DataLaunchdarklyTeam;

DataLaunchdarklyTeam.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataLaunchdarklyTeam.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataLaunchdarklyTeam resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataLaunchdarklyTeam to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataLaunchdarklyTeam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataLaunchdarklyTeam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.maintainers">maintainers</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList">DataLaunchdarklyTeamMaintainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.projectKeys">projectKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.customRoleKeysInput">customRoleKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.customRoleKeys">customRoleKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `maintainers`<sup>Required</sup> <a name="maintainers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.maintainers"></a>

```java
public DataLaunchdarklyTeamMaintainersList getMaintainers();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList">DataLaunchdarklyTeamMaintainersList</a>

---

##### `projectKeys`<sup>Required</sup> <a name="projectKeys" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.projectKeys"></a>

```java
public java.util.List<java.lang.String> getProjectKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customRoleKeysInput`<sup>Optional</sup> <a name="customRoleKeysInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.customRoleKeysInput"></a>

```java
public java.util.List<java.lang.String> getCustomRoleKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `customRoleKeys`<sup>Required</sup> <a name="customRoleKeys" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.customRoleKeys"></a>

```java
public java.util.List<java.lang.String> getCustomRoleKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyTeamConfig <a name="DataLaunchdarklyTeamConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_team.DataLaunchdarklyTeamConfig;

DataLaunchdarklyTeamConfig.builder()
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
//  .customRoleKeys(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.key">key</a></code> | <code>java.lang.String</code> | The team's unique key. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.customRoleKeys">customRoleKeys</a></code> | <code>java.util.List<java.lang.String></code> | A list of keys for custom roles the team has. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.description">description</a></code> | <code>java.lang.String</code> | The team's description. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team#id DataLaunchdarklyTeam#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.name">name</a></code> | <code>java.lang.String</code> | The team's human-readable name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The team's unique key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team#key DataLaunchdarklyTeam#key}

---

##### `customRoleKeys`<sup>Optional</sup> <a name="customRoleKeys" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.customRoleKeys"></a>

```java
public java.util.List<java.lang.String> getCustomRoleKeys();
```

- *Type:* java.util.List<java.lang.String>

A list of keys for custom roles the team has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team#custom_role_keys DataLaunchdarklyTeam#custom_role_keys}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The team's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team#description DataLaunchdarklyTeam#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team#id DataLaunchdarklyTeam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The team's human-readable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs/data-sources/team#name DataLaunchdarklyTeam#name}

---

### DataLaunchdarklyTeamMaintainers <a name="DataLaunchdarklyTeamMaintainers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_team.DataLaunchdarklyTeamMaintainers;

DataLaunchdarklyTeamMaintainers.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyTeamMaintainersList <a name="DataLaunchdarklyTeamMaintainersList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_team.DataLaunchdarklyTeamMaintainersList;

new DataLaunchdarklyTeamMaintainersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.get"></a>

```java
public DataLaunchdarklyTeamMaintainersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataLaunchdarklyTeamMaintainersOutputReference <a name="DataLaunchdarklyTeamMaintainersOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.data_launchdarkly_team.DataLaunchdarklyTeamMaintainersOutputReference;

new DataLaunchdarklyTeamMaintainersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainers">DataLaunchdarklyTeamMaintainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.internalValue"></a>

```java
public DataLaunchdarklyTeamMaintainers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainers">DataLaunchdarklyTeamMaintainers</a>

---



