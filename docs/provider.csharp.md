# `provider`

Refer to the Terraform Registory for docs: [`launchdarkly`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-launchdarkly.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaunchdarklyProvider <a name="LaunchdarklyProvider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs launchdarkly}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new LaunchdarklyProvider(Construct Scope, string Id, LaunchdarklyProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig">LaunchdarklyProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig">LaunchdarklyProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetApiHost">ResetApiHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOauthToken">ResetOauthToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetApiHost` <a name="ResetApiHost" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetApiHost"></a>

```csharp
private void ResetApiHost()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOauthToken"></a>

```csharp
private void ResetOauthToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

LaunchdarklyProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

LaunchdarklyProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

LaunchdarklyProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHostInput">ApiHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthTokenInput">OauthTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHost">ApiHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthToken">OauthToken</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ApiHostInput`<sup>Optional</sup> <a name="ApiHostInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHostInput"></a>

```csharp
public string ApiHostInput { get; }
```

- *Type:* string

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthTokenInput"></a>

```csharp
public string OauthTokenInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `ApiHost`<sup>Optional</sup> <a name="ApiHost" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHost"></a>

```csharp
public string ApiHost { get; }
```

- *Type:* string

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthToken"></a>

```csharp
public string OauthToken { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LaunchdarklyProviderConfig <a name="LaunchdarklyProviderConfig" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Launchdarkly;

new LaunchdarklyProviderConfig {
    string AccessToken = null,
    string Alias = null,
    string ApiHost = null,
    string OauthToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.accessToken">AccessToken</a></code> | <code>string</code> | The LaunchDarkly API key. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.apiHost">ApiHost</a></code> | <code>string</code> | The LaunchDarkly host address, e.g. https://app.launchdarkly.com. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.oauthToken">OauthToken</a></code> | <code>string</code> | The LaunchDarkly OAuth token. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

The LaunchDarkly API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs#access_token LaunchdarklyProvider#access_token}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs#alias LaunchdarklyProvider#alias}

---

##### `ApiHost`<sup>Optional</sup> <a name="ApiHost" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.apiHost"></a>

```csharp
public string ApiHost { get; set; }
```

- *Type:* string

The LaunchDarkly host address, e.g. https://app.launchdarkly.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs#api_host LaunchdarklyProvider#api_host}

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.oauthToken"></a>

```csharp
public string OauthToken { get; set; }
```

- *Type:* string

The LaunchDarkly OAuth token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs#oauth_token LaunchdarklyProvider#oauth_token}

---



