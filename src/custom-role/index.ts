// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The base permission level - either reader or no_access. Defaults to reader
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#base_permissions CustomRole#base_permissions}
  */
  readonly basePermissions?: string;
  /**
  * Description of the custom role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#description CustomRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#id CustomRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique key that will be used to reference the custom role in your code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#key CustomRole#key}
  */
  readonly key: string;
  /**
  * A name for the custom role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#name CustomRole#name}
  */
  readonly name: string;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#policy CustomRole#policy}
  */
  readonly policy?: CustomRolePolicy[] | cdktf.IResolvable;
  /**
  * policy_statements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#policy_statements CustomRole#policy_statements}
  */
  readonly policyStatements?: CustomRolePolicyStatements[] | cdktf.IResolvable;
}
export interface CustomRolePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#actions CustomRole#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#effect CustomRole#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#resources CustomRole#resources}
  */
  readonly resources: string[];
}

export function customRolePolicyToTerraform(struct?: CustomRolePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    effect: cdktf.stringToTerraform(struct!.effect),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}

export class CustomRolePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomRolePolicy | cdktf.IResolvable | undefined {
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
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomRolePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._effect = undefined;
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
      this._resources = value.resources;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
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

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class CustomRolePolicyList extends cdktf.ComplexList {
  public internalValue? : CustomRolePolicy[] | cdktf.IResolvable

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
  public get(index: number): CustomRolePolicyOutputReference {
    return new CustomRolePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomRolePolicyStatements {
  /**
  * The list of action specifiers defining the actions to which the statement applies.
Either `actions` or `not_actions` must be specified. For a list of available actions read [Actions reference](https://docs.launchdarkly.com/home/account-security/custom-roles/actions#actions-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#actions CustomRole#actions}
  */
  readonly actions?: string[];
  /**
  * Either `allow` or `deny`. This argument defines whether the statement allows or denies access to the named resources and actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#effect CustomRole#effect}
  */
  readonly effect: string;
  /**
  * The list of action specifiers defining the actions to which the statement does not apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#not_actions CustomRole#not_actions}
  */
  readonly notActions?: string[];
  /**
  * The list of resource specifiers defining the resources to which the statement does not apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#not_resources CustomRole#not_resources}
  */
  readonly notResources?: string[];
  /**
  * The list of resource specifiers defining the resources to which the statement applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role#resources CustomRole#resources}
  */
  readonly resources?: string[];
}

export function customRolePolicyStatementsToTerraform(struct?: CustomRolePolicyStatements | cdktf.IResolvable): any {
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

export class CustomRolePolicyStatementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomRolePolicyStatements | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CustomRolePolicyStatements | cdktf.IResolvable | undefined) {
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

export class CustomRolePolicyStatementsList extends cdktf.ComplexList {
  public internalValue? : CustomRolePolicyStatements[] | cdktf.IResolvable

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
  public get(index: number): CustomRolePolicyStatementsOutputReference {
    return new CustomRolePolicyStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role launchdarkly_custom_role}
*/
export class CustomRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_custom_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/resources/custom_role launchdarkly_custom_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomRoleConfig
  */
  public constructor(scope: Construct, id: string, config: CustomRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_custom_role',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.15.2',
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
    this._basePermissions = config.basePermissions;
    this._description = config.description;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._policy.internalValue = config.policy;
    this._policyStatements.internalValue = config.policyStatements;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_permissions - computed: false, optional: true, required: false
  private _basePermissions?: string; 
  public get basePermissions() {
    return this.getStringAttribute('base_permissions');
  }
  public set basePermissions(value: string) {
    this._basePermissions = value;
  }
  public resetBasePermissions() {
    this._basePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePermissionsInput() {
    return this._basePermissions;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new CustomRolePolicyList(this, "policy", true);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: CustomRolePolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // policy_statements - computed: false, optional: true, required: false
  private _policyStatements = new CustomRolePolicyStatementsList(this, "policy_statements", false);
  public get policyStatements() {
    return this._policyStatements;
  }
  public putPolicyStatements(value: CustomRolePolicyStatements[] | cdktf.IResolvable) {
    this._policyStatements.internalValue = value;
  }
  public resetPolicyStatements() {
    this._policyStatements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyStatementsInput() {
    return this._policyStatements.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_permissions: cdktf.stringToTerraform(this._basePermissions),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.listMapper(customRolePolicyToTerraform, true)(this._policy.internalValue),
      policy_statements: cdktf.listMapper(customRolePolicyStatementsToTerraform, true)(this._policyStatements.internalValue),
    };
  }
}
