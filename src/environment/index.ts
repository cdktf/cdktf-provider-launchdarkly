// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * A color swatch (as an RGB hex value with no leading '#', e.g. C8C8C8)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#color Environment#color}
  */
  readonly color: string;
  /**
  * Whether or not to require confirmation for flag and segment changes in this environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#confirm_changes Environment#confirm_changes}
  */
  readonly confirmChanges?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to default to sending data export events for flags created in the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#default_track_events Environment#default_track_events}
  */
  readonly defaultTrackEvents?: boolean | cdktf.IResolvable;
  /**
  * The TTL for the environment. This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#default_ttl Environment#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#id Environment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A project-unique key for the new environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#key Environment#key}
  */
  readonly key: string;
  /**
  * The name of the new environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * The LaunchDarkly project key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#project_key Environment#project_key}
  */
  readonly projectKey: string;
  /**
  * Whether or not to require comments for flag and segment changes in this environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#require_comments Environment#require_comments}
  */
  readonly requireComments?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to use secure mode. Secure mode ensures a user of the client-side SDK cannot impersonate another user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#secure_mode Environment#secure_mode}
  */
  readonly secureMode?: boolean | cdktf.IResolvable;
  /**
  * Tags associated with your resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#tags Environment#tags}
  */
  readonly tags?: string[];
  /**
  * approval_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#approval_settings Environment#approval_settings}
  */
  readonly approvalSettings?: EnvironmentApprovalSettings[] | cdktf.IResolvable;
}
export interface EnvironmentApprovalSettings {
  /**
  * Whether changes can be applied as long as minNumApprovals is met, regardless of whether any reviewers have declined a request. Defaults to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#can_apply_declined_changes Environment#can_apply_declined_changes}
  */
  readonly canApplyDeclinedChanges?: boolean | cdktf.IResolvable;
  /**
  * Whether requesters can approve or decline their own request. They may always comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#can_review_own_request Environment#can_review_own_request}
  */
  readonly canReviewOwnRequest?: boolean | cdktf.IResolvable;
  /**
  * The number of approvals required before an approval request can be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#min_num_approvals Environment#min_num_approvals}
  */
  readonly minNumApprovals?: number;
  /**
  * Whether any changes to flags in this environment will require approval. You may only set required or requiredApprovalTags, not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#required Environment#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * An array of tags used to specify which flags with those tags require approval. You may only set requiredApprovalTags or required, not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment#required_approval_tags Environment#required_approval_tags}
  */
  readonly requiredApprovalTags?: string[];
}

export function environmentApprovalSettingsToTerraform(struct?: EnvironmentApprovalSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_apply_declined_changes: cdktf.booleanToTerraform(struct!.canApplyDeclinedChanges),
    can_review_own_request: cdktf.booleanToTerraform(struct!.canReviewOwnRequest),
    min_num_approvals: cdktf.numberToTerraform(struct!.minNumApprovals),
    required: cdktf.booleanToTerraform(struct!.required),
    required_approval_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredApprovalTags),
  }
}

export class EnvironmentApprovalSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentApprovalSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canApplyDeclinedChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.canApplyDeclinedChanges = this._canApplyDeclinedChanges;
    }
    if (this._canReviewOwnRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.canReviewOwnRequest = this._canReviewOwnRequest;
    }
    if (this._minNumApprovals !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNumApprovals = this._minNumApprovals;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._requiredApprovalTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredApprovalTags = this._requiredApprovalTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentApprovalSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canApplyDeclinedChanges = undefined;
      this._canReviewOwnRequest = undefined;
      this._minNumApprovals = undefined;
      this._required = undefined;
      this._requiredApprovalTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canApplyDeclinedChanges = value.canApplyDeclinedChanges;
      this._canReviewOwnRequest = value.canReviewOwnRequest;
      this._minNumApprovals = value.minNumApprovals;
      this._required = value.required;
      this._requiredApprovalTags = value.requiredApprovalTags;
    }
  }

  // can_apply_declined_changes - computed: false, optional: true, required: false
  private _canApplyDeclinedChanges?: boolean | cdktf.IResolvable; 
  public get canApplyDeclinedChanges() {
    return this.getBooleanAttribute('can_apply_declined_changes');
  }
  public set canApplyDeclinedChanges(value: boolean | cdktf.IResolvable) {
    this._canApplyDeclinedChanges = value;
  }
  public resetCanApplyDeclinedChanges() {
    this._canApplyDeclinedChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canApplyDeclinedChangesInput() {
    return this._canApplyDeclinedChanges;
  }

  // can_review_own_request - computed: false, optional: true, required: false
  private _canReviewOwnRequest?: boolean | cdktf.IResolvable; 
  public get canReviewOwnRequest() {
    return this.getBooleanAttribute('can_review_own_request');
  }
  public set canReviewOwnRequest(value: boolean | cdktf.IResolvable) {
    this._canReviewOwnRequest = value;
  }
  public resetCanReviewOwnRequest() {
    this._canReviewOwnRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canReviewOwnRequestInput() {
    return this._canReviewOwnRequest;
  }

  // min_num_approvals - computed: false, optional: true, required: false
  private _minNumApprovals?: number; 
  public get minNumApprovals() {
    return this.getNumberAttribute('min_num_approvals');
  }
  public set minNumApprovals(value: number) {
    this._minNumApprovals = value;
  }
  public resetMinNumApprovals() {
    this._minNumApprovals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumApprovalsInput() {
    return this._minNumApprovals;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // required_approval_tags - computed: false, optional: true, required: false
  private _requiredApprovalTags?: string[]; 
  public get requiredApprovalTags() {
    return this.getListAttribute('required_approval_tags');
  }
  public set requiredApprovalTags(value: string[]) {
    this._requiredApprovalTags = value;
  }
  public resetRequiredApprovalTags() {
    this._requiredApprovalTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredApprovalTagsInput() {
    return this._requiredApprovalTags;
  }
}

export class EnvironmentApprovalSettingsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentApprovalSettings[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentApprovalSettingsOutputReference {
    return new EnvironmentApprovalSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment launchdarkly_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/resources/environment launchdarkly_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_environment',
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
    this._color = config.color;
    this._confirmChanges = config.confirmChanges;
    this._defaultTrackEvents = config.defaultTrackEvents;
    this._defaultTtl = config.defaultTtl;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._projectKey = config.projectKey;
    this._requireComments = config.requireComments;
    this._secureMode = config.secureMode;
    this._tags = config.tags;
    this._approvalSettings.internalValue = config.approvalSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // client_side_id - computed: true, optional: false, required: false
  public get clientSideId() {
    return this.getStringAttribute('client_side_id');
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // confirm_changes - computed: false, optional: true, required: false
  private _confirmChanges?: boolean | cdktf.IResolvable; 
  public get confirmChanges() {
    return this.getBooleanAttribute('confirm_changes');
  }
  public set confirmChanges(value: boolean | cdktf.IResolvable) {
    this._confirmChanges = value;
  }
  public resetConfirmChanges() {
    this._confirmChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmChangesInput() {
    return this._confirmChanges;
  }

  // default_track_events - computed: false, optional: true, required: false
  private _defaultTrackEvents?: boolean | cdktf.IResolvable; 
  public get defaultTrackEvents() {
    return this.getBooleanAttribute('default_track_events');
  }
  public set defaultTrackEvents(value: boolean | cdktf.IResolvable) {
    this._defaultTrackEvents = value;
  }
  public resetDefaultTrackEvents() {
    this._defaultTrackEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTrackEventsInput() {
    return this._defaultTrackEvents;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
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

  // mobile_key - computed: true, optional: false, required: false
  public get mobileKey() {
    return this.getStringAttribute('mobile_key');
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

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // require_comments - computed: false, optional: true, required: false
  private _requireComments?: boolean | cdktf.IResolvable; 
  public get requireComments() {
    return this.getBooleanAttribute('require_comments');
  }
  public set requireComments(value: boolean | cdktf.IResolvable) {
    this._requireComments = value;
  }
  public resetRequireComments() {
    this._requireComments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCommentsInput() {
    return this._requireComments;
  }

  // secure_mode - computed: false, optional: true, required: false
  private _secureMode?: boolean | cdktf.IResolvable; 
  public get secureMode() {
    return this.getBooleanAttribute('secure_mode');
  }
  public set secureMode(value: boolean | cdktf.IResolvable) {
    this._secureMode = value;
  }
  public resetSecureMode() {
    this._secureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureModeInput() {
    return this._secureMode;
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

  // approval_settings - computed: false, optional: true, required: false
  private _approvalSettings = new EnvironmentApprovalSettingsList(this, "approval_settings", false);
  public get approvalSettings() {
    return this._approvalSettings;
  }
  public putApprovalSettings(value: EnvironmentApprovalSettings[] | cdktf.IResolvable) {
    this._approvalSettings.internalValue = value;
  }
  public resetApprovalSettings() {
    this._approvalSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalSettingsInput() {
    return this._approvalSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      confirm_changes: cdktf.booleanToTerraform(this._confirmChanges),
      default_track_events: cdktf.booleanToTerraform(this._defaultTrackEvents),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
      require_comments: cdktf.booleanToTerraform(this._requireComments),
      secure_mode: cdktf.booleanToTerraform(this._secureMode),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      approval_settings: cdktf.listMapper(environmentApprovalSettingsToTerraform, true)(this._approvalSettings.internalValue),
    };
  }
}
