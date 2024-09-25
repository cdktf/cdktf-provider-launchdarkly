// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs/resources/team_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of custom roles keys associated with the team member. Custom roles are only available to customers on an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact LaunchDarkly Sales](https://launchdarkly.com/contact-sales/).
  * 
  * -> **Note:** each `launchdarkly_team_member` must have either a `role` or `custom_roles` argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs/resources/team_member#custom_roles TeamMember#custom_roles}
  */
  readonly customRoles?: string[];
  /**
  * The unique email address associated with the team member. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs/resources/team_member#email TeamMember#email}
  */
  readonly email: string;
  /**
  * The team member's given name. Once created, this cannot be updated except by the team member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs/resources/team_member#first_name TeamMember#first_name}
  */
  readonly firstName?: string;
  /**
  * TThe team member's family name. Once created, this cannot be updated except by the team member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs/resources/team_member#last_name TeamMember#last_name}
  */
  readonly lastName?: string;
  /**
  * The role associated with team member. Supported roles are `reader`, `writer`, `no_access`, or `admin`. If you don't specify a role, `reader` is assigned by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs/resources/team_member#role TeamMember#role}
  */
  readonly role?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs/resources/team_member launchdarkly_team_member}
*/
export class TeamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_team_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamMember to import
  * @param importFromId The id of the existing TeamMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs/resources/team_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "launchdarkly_team_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.2/docs/resources/team_member launchdarkly_team_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: TeamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_team_member',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.20.2',
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
    this._customRoles = config.customRoles;
    this._email = config.email;
    this._firstName = config.firstName;
    this._lastName = config.lastName;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_roles - computed: false, optional: true, required: false
  private _customRoles?: string[]; 
  public get customRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_roles'));
  }
  public set customRoles(value: string[]) {
    this._customRoles = value;
  }
  public resetCustomRoles() {
    this._customRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRolesInput() {
    return this._customRoles;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customRoles),
      email: cdktf.stringToTerraform(this._email),
      first_name: cdktf.stringToTerraform(this._firstName),
      last_name: cdktf.stringToTerraform(this._lastName),
      role: cdktf.stringToTerraform(this._role),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
