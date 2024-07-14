// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of custom role keys the team will access. The referenced custom roles must already exist in LaunchDarkly. If they don't, the provider may behave unexpectedly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/team#custom_role_keys Team#custom_role_keys}
  */
  readonly customRoleKeys?: string[];
  /**
  * The team description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/team#description Team#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The team key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/team#key Team#key}
  */
  readonly key: string;
  /**
  * List of member IDs for users who maintain the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/team#maintainers Team#maintainers}
  */
  readonly maintainers?: string[];
  /**
  * List of member IDs who belong to the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/team#member_ids Team#member_ids}
  */
  readonly memberIds?: string[];
  /**
  * A human-friendly name for the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/team#name Team#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/team launchdarkly_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "launchdarkly_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/team launchdarkly_team} Resource
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
        providerVersion: '2.19.0',
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_role_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customRoleKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintainers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._maintainers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      member_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._memberIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
