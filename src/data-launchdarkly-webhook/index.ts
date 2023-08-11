// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/data-sources/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLaunchdarklyWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/data-sources/webhook#id DataLaunchdarklyWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A human-readable name for your webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/data-sources/webhook#name DataLaunchdarklyWebhook#name}
  */
  readonly name?: string;
  /**
  * If sign is true, and the secret attribute is omitted, LaunchDarkly will automatically generate a secret for you
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/data-sources/webhook#secret DataLaunchdarklyWebhook#secret}
  */
  readonly secret?: string;
}
export interface DataLaunchdarklyWebhookStatements {
}

export function dataLaunchdarklyWebhookStatementsToTerraform(struct?: DataLaunchdarklyWebhookStatements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataLaunchdarklyWebhookStatementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLaunchdarklyWebhookStatements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyWebhookStatements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // not_actions - computed: true, optional: false, required: false
  public get notActions() {
    return this.getListAttribute('not_actions');
  }

  // not_resources - computed: true, optional: false, required: false
  public get notResources() {
    return this.getListAttribute('not_resources');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }
}

export class DataLaunchdarklyWebhookStatementsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLaunchdarklyWebhookStatementsOutputReference {
    return new DataLaunchdarklyWebhookStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/data-sources/webhook launchdarkly_webhook}
*/
export class DataLaunchdarklyWebhook extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_webhook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.14.0/docs/data-sources/webhook launchdarkly_webhook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLaunchdarklyWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: DataLaunchdarklyWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_webhook',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.14.0',
        providerVersionConstraint: '~> 2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._secret = config.secret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on - computed: true, optional: false, required: false
  public get on() {
    return this.getBooleanAttribute('on');
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // statements - computed: true, optional: false, required: false
  private _statements = new DataLaunchdarklyWebhookStatementsList(this, "statements", false);
  public get statements() {
    return this._statements;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secret: cdktf.stringToTerraform(this._secret),
    };
  }
}
