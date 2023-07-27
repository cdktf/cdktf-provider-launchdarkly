/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLaunchdarklyWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/webhook#id DataLaunchdarklyWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A human-readable name for your webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/webhook#name DataLaunchdarklyWebhook#name}
  */
  readonly name?: string;
  /**
  * If sign is true, and the secret attribute is omitted, LaunchDarkly will automatically generate a secret for you
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/webhook#secret DataLaunchdarklyWebhook#secret}
  */
  readonly secret?: string;
  /**
  * Tags associated with your resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/webhook#tags DataLaunchdarklyWebhook#tags}
  */
  readonly tags?: string[];
  /**
  * statements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/webhook#statements DataLaunchdarklyWebhook#statements}
  */
  readonly statements?: DataLaunchdarklyWebhookStatements[] | cdktf.IResolvable;
}
export interface DataLaunchdarklyWebhookStatements {
  /**
  * An action to perform on a resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/webhook#actions DataLaunchdarklyWebhook#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/webhook#effect DataLaunchdarklyWebhook#effect}
  */
  readonly effect: string;
  /**
  * Targeted actions will be those actions NOT in this list. The 'actions' field must be empty to use this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/webhook#not_actions DataLaunchdarklyWebhook#not_actions}
  */
  readonly notActions?: string[];
  /**
  * Targeted resources will be those resources NOT in this list. The 'resources' field must be empty to use this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/webhook#not_resources DataLaunchdarklyWebhook#not_resources}
  */
  readonly notResources?: string[];
  /**
  * A list of LaunchDarkly resource specifiers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/webhook#resources DataLaunchdarklyWebhook#resources}
  */
  readonly resources?: string[];
}

export function dataLaunchdarklyWebhookStatementsToTerraform(struct?: DataLaunchdarklyWebhookStatements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    effect: cdktf.stringToTerraform(struct!.effect),
    not_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notActions),
    not_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notResources),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}

export class DataLaunchdarklyWebhookStatementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLaunchdarklyWebhookStatements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._notActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.notActions = this._notActions;
    }
    if (this._notResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.notResources = this._notResources;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyWebhookStatements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._effect = undefined;
      this._notActions = undefined;
      this._notResources = undefined;
      this._resources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._effect = value.effect;
      this._notActions = value.notActions;
      this._notResources = value.notResources;
      this._resources = value.resources;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // not_actions - computed: false, optional: true, required: false
  private _notActions?: string[]; 
  public get notActions() {
    return this.getListAttribute('not_actions');
  }
  public set notActions(value: string[]) {
    this._notActions = value;
  }
  public resetNotActions() {
    this._notActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notActionsInput() {
    return this._notActions;
  }

  // not_resources - computed: false, optional: true, required: false
  private _notResources?: string[]; 
  public get notResources() {
    return this.getListAttribute('not_resources');
  }
  public set notResources(value: string[]) {
    this._notResources = value;
  }
  public resetNotResources() {
    this._notResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notResourcesInput() {
    return this._notResources;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class DataLaunchdarklyWebhookStatementsList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklyWebhookStatements[] | cdktf.IResolvable

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
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/webhook launchdarkly_webhook}
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
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/webhook launchdarkly_webhook} Data Source
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
        providerVersion: '2.13.3',
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
    this._tags = config.tags;
    this._statements.internalValue = config.statements;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // statements - computed: false, optional: true, required: false
  private _statements = new DataLaunchdarklyWebhookStatementsList(this, "statements", false);
  public get statements() {
    return this._statements;
  }
  public putStatements(value: DataLaunchdarklyWebhookStatements[] | cdktf.IResolvable) {
    this._statements.internalValue = value;
  }
  public resetStatements() {
    this._statements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementsInput() {
    return this._statements.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secret: cdktf.stringToTerraform(this._secret),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      statements: cdktf.listMapper(dataLaunchdarklyWebhookStatementsToTerraform, true)(this._statements.internalValue),
    };
  }
}
