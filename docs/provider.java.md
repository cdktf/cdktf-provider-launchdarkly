# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-launchdarkly.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaunchdarklyProvider <a name="LaunchdarklyProvider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs launchdarkly}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.provider.LaunchdarklyProvider;

LaunchdarklyProvider.Builder.create(Construct scope, java.lang.String id)
//  .accessToken(java.lang.String)
//  .alias(java.lang.String)
//  .apiHost(java.lang.String)
//  .httpTimeout(java.lang.Number)
//  .oauthToken(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.accessToken">accessToken</a></code> | <code>java.lang.String</code> | The [personal access token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#personal-tokens) or [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens) used to authenticate with LaunchDarkly. You can also set this with the `LAUNCHDARKLY_ACCESS_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.apiHost">apiHost</a></code> | <code>java.lang.String</code> | The LaunchDarkly host address. If this argument is not specified, the default host address is `https://app.launchdarkly.com`. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.httpTimeout">httpTimeout</a></code> | <code>java.lang.Number</code> | The HTTP timeout (in seconds) when making API calls to LaunchDarkly. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.oauthToken">oauthToken</a></code> | <code>java.lang.String</code> | An OAuth V2 token you use to authenticate with LaunchDarkly. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.accessToken"></a>

- *Type:* java.lang.String

The [personal access token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#personal-tokens) or [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens) used to authenticate with LaunchDarkly. You can also set this with the `LAUNCHDARKLY_ACCESS_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs#access_token LaunchdarklyProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs#alias LaunchdarklyProvider#alias}

---

##### `apiHost`<sup>Optional</sup> <a name="apiHost" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.apiHost"></a>

- *Type:* java.lang.String

The LaunchDarkly host address. If this argument is not specified, the default host address is `https://app.launchdarkly.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs#api_host LaunchdarklyProvider#api_host}

---

##### `httpTimeout`<sup>Optional</sup> <a name="httpTimeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.httpTimeout"></a>

- *Type:* java.lang.Number

The HTTP timeout (in seconds) when making API calls to LaunchDarkly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs#http_timeout LaunchdarklyProvider#http_timeout}

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.oauthToken"></a>

- *Type:* java.lang.String

An OAuth V2 token you use to authenticate with LaunchDarkly.

You can also set this with the `LAUNCHDARKLY_OAUTH_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs#oauth_token LaunchdarklyProvider#oauth_token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetApiHost">resetApiHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetHttpTimeout">resetHttpTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOauthToken">resetOauthToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetApiHost` <a name="resetApiHost" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetApiHost"></a>

```java
public void resetApiHost()
```

##### `resetHttpTimeout` <a name="resetHttpTimeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetHttpTimeout"></a>

```java
public void resetHttpTimeout()
```

##### `resetOauthToken` <a name="resetOauthToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOauthToken"></a>

```java
public void resetOauthToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LaunchdarklyProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.provider.LaunchdarklyProvider;

LaunchdarklyProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.provider.LaunchdarklyProvider;

LaunchdarklyProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.provider.LaunchdarklyProvider;

LaunchdarklyProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.provider.LaunchdarklyProvider;

LaunchdarklyProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LaunchdarklyProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LaunchdarklyProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LaunchdarklyProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LaunchdarklyProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LaunchdarklyProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHostInput">apiHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeoutInput">httpTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthTokenInput">oauthTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHost">apiHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeout">httpTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthToken">oauthToken</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessTokenInput"></a>

```java
public java.lang.String getAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `apiHostInput`<sup>Optional</sup> <a name="apiHostInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHostInput"></a>

```java
public java.lang.String getApiHostInput();
```

- *Type:* java.lang.String

---

##### `httpTimeoutInput`<sup>Optional</sup> <a name="httpTimeoutInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeoutInput"></a>

```java
public java.lang.Number getHttpTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthTokenInput"></a>

```java
public java.lang.String getOauthTokenInput();
```

- *Type:* java.lang.String

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `apiHost`<sup>Optional</sup> <a name="apiHost" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHost"></a>

```java
public java.lang.String getApiHost();
```

- *Type:* java.lang.String

---

##### `httpTimeout`<sup>Optional</sup> <a name="httpTimeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeout"></a>

```java
public java.lang.Number getHttpTimeout();
```

- *Type:* java.lang.Number

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthToken"></a>

```java
public java.lang.String getOauthToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LaunchdarklyProviderConfig <a name="LaunchdarklyProviderConfig" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.provider.LaunchdarklyProviderConfig;

LaunchdarklyProviderConfig.builder()
//  .accessToken(java.lang.String)
//  .alias(java.lang.String)
//  .apiHost(java.lang.String)
//  .httpTimeout(java.lang.Number)
//  .oauthToken(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | The [personal access token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#personal-tokens) or [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens) used to authenticate with LaunchDarkly. You can also set this with the `LAUNCHDARKLY_ACCESS_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.apiHost">apiHost</a></code> | <code>java.lang.String</code> | The LaunchDarkly host address. If this argument is not specified, the default host address is `https://app.launchdarkly.com`. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.httpTimeout">httpTimeout</a></code> | <code>java.lang.Number</code> | The HTTP timeout (in seconds) when making API calls to LaunchDarkly. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.oauthToken">oauthToken</a></code> | <code>java.lang.String</code> | An OAuth V2 token you use to authenticate with LaunchDarkly. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

The [personal access token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#personal-tokens) or [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens) used to authenticate with LaunchDarkly. You can also set this with the `LAUNCHDARKLY_ACCESS_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs#access_token LaunchdarklyProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs#alias LaunchdarklyProvider#alias}

---

##### `apiHost`<sup>Optional</sup> <a name="apiHost" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.apiHost"></a>

```java
public java.lang.String getApiHost();
```

- *Type:* java.lang.String

The LaunchDarkly host address. If this argument is not specified, the default host address is `https://app.launchdarkly.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs#api_host LaunchdarklyProvider#api_host}

---

##### `httpTimeout`<sup>Optional</sup> <a name="httpTimeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.httpTimeout"></a>

```java
public java.lang.Number getHttpTimeout();
```

- *Type:* java.lang.Number

The HTTP timeout (in seconds) when making API calls to LaunchDarkly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs#http_timeout LaunchdarklyProvider#http_timeout}

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.oauthToken"></a>

```java
public java.lang.String getOauthToken();
```

- *Type:* java.lang.String

An OAuth V2 token you use to authenticate with LaunchDarkly.

You can also set this with the `LAUNCHDARKLY_OAUTH_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs#oauth_token LaunchdarklyProvider#oauth_token}

---



