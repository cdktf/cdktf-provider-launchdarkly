// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of custom role keys for the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/resources/team#custom_role_keys Team#custom_role_keys}
  */
  readonly customRoleKeys?: string[];
  /**
  * The team's description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/resources/team#description Team#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The team's unique key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/resources/team#key Team#key}
  */
  readonly key: string;
  /**
  * A list of team maintainer IDs as strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/resources/team#maintainers Team#maintainers}
  */
  readonly maintainers?: string[];
  /**
  * A list of team member IDs as strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/resources/team#member_ids Team#member_ids}
  */
  readonly memberIds?: string[];
  /**
  * The team's human-readable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/resources/team#name Team#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/resources/team launchdarkly_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_team";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.2/docs/resources/team launchdarkly_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_team',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.13.2',
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
    this._customRoleKeys = config.customRoleKeys;
    this._description = config.description;
    this._id = config.id;
    this._key = config.key;
    this._maintainers = config.maintainers;
    this._memberIds = config.memberIds;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_role_keys - computed: false, optional: true, required: false
  private _customRoleKeys?: string[]; 
  public get customRoleKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_role_keys'));
  }
  public set customRoleKeys(value: string[]) {
    this._customRoleKeys = value;
  }
  public resetCustomRoleKeys() {
    this._customRoleKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRoleKeysInput() {
    return this._customRoleKeys;
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

  // maintainers - computed: false, optional: true, required: false
  private _maintainers?: string[]; 
  public get maintainers() {
    return cdktf.Fn.tolist(this.getListAttribute('maintainers'));
  }
  public set maintainers(value: string[]) {
    this._maintainers = value;
  }
  public resetMaintainers() {
    this._maintainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainersInput() {
    return this._maintainers;
  }

  // member_ids - computed: false, optional: true, required: false
  private _memberIds?: string[]; 
  public get memberIds() {
    return cdktf.Fn.tolist(this.getListAttribute('member_ids'));
  }
  public set memberIds(value: string[]) {
    this._memberIds = value;
  }
  public resetMemberIds() {
    this._memberIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdsInput() {
    return this._memberIds;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_role_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customRoleKeys),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      maintainers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._maintainers),
      member_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberIds),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
