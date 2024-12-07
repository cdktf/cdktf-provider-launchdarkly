# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-launchdarkly.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaunchdarklyProvider <a name="LaunchdarklyProvider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs launchdarkly}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-launchdarkly'

new provider.LaunchdarklyProvider(scope: Construct, id: string, config?: LaunchdarklyProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig">LaunchdarklyProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig">LaunchdarklyProviderConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetApiHost` <a name="resetApiHost" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetApiHost"></a>

```typescript
public resetApiHost(): void
```

##### `resetHttpTimeout` <a name="resetHttpTimeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetHttpTimeout"></a>

```typescript
public resetHttpTimeout(): void
```

##### `resetOauthToken` <a name="resetOauthToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOauthToken"></a>

```typescript
public resetOauthToken(): void
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

```typescript
import { provider } from '@cdktf/provider-launchdarkly'

provider.LaunchdarklyProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-launchdarkly'

provider.LaunchdarklyProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-launchdarkly'

provider.LaunchdarklyProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-launchdarkly'

provider.LaunchdarklyProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LaunchdarklyProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LaunchdarklyProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LaunchdarklyProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LaunchdarklyProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHostInput">apiHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeoutInput">httpTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthTokenInput">oauthTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHost">apiHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeout">httpTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthToken">oauthToken</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `apiHostInput`<sup>Optional</sup> <a name="apiHostInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHostInput"></a>

```typescript
public readonly apiHostInput: string;
```

- *Type:* string

---

##### `httpTimeoutInput`<sup>Optional</sup> <a name="httpTimeoutInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeoutInput"></a>

```typescript
public readonly httpTimeoutInput: number;
```

- *Type:* number

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthTokenInput"></a>

```typescript
public readonly oauthTokenInput: string;
```

- *Type:* string

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `apiHost`<sup>Optional</sup> <a name="apiHost" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHost"></a>

```typescript
public readonly apiHost: string;
```

- *Type:* string

---

##### `httpTimeout`<sup>Optional</sup> <a name="httpTimeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeout"></a>

```typescript
public readonly httpTimeout: number;
```

- *Type:* number

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthToken"></a>

```typescript
public readonly oauthToken: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LaunchdarklyProviderConfig <a name="LaunchdarklyProviderConfig" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-launchdarkly'

const launchdarklyProviderConfig: provider.LaunchdarklyProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.accessToken">accessToken</a></code> | <code>string</code> | The [personal access token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#personal-tokens) or [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens) used to authenticate with LaunchDarkly. You can also set this with the `LAUNCHDARKLY_ACCESS_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.apiHost">apiHost</a></code> | <code>string</code> | The LaunchDarkly host address. If this argument is not specified, the default host address is `https://app.launchdarkly.com`. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.httpTimeout">httpTimeout</a></code> | <code>number</code> | The HTTP timeout (in seconds) when making API calls to LaunchDarkly. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.oauthToken">oauthToken</a></code> | <code>string</code> | An OAuth V2 token you use to authenticate with LaunchDarkly. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

The [personal access token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#personal-tokens) or [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens) used to authenticate with LaunchDarkly. You can also set this with the `LAUNCHDARKLY_ACCESS_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs#access_token LaunchdarklyProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs#alias LaunchdarklyProvider#alias}

---

##### `apiHost`<sup>Optional</sup> <a name="apiHost" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.apiHost"></a>

```typescript
public readonly apiHost: string;
```

- *Type:* string

The LaunchDarkly host address. If this argument is not specified, the default host address is `https://app.launchdarkly.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs#api_host LaunchdarklyProvider#api_host}

---

##### `httpTimeout`<sup>Optional</sup> <a name="httpTimeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.httpTimeout"></a>

```typescript
public readonly httpTimeout: number;
```

- *Type:* number

The HTTP timeout (in seconds) when making API calls to LaunchDarkly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs#http_timeout LaunchdarklyProvider#http_timeout}

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.oauthToken"></a>

```typescript
public readonly oauthToken: string;
```

- *Type:* string

An OAuth V2 token you use to authenticate with LaunchDarkly.

You can also set this with the `LAUNCHDARKLY_OAUTH_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.2/docs#oauth_token LaunchdarklyProvider#oauth_token}

---



