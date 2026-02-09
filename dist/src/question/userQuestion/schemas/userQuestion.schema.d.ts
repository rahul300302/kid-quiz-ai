import { Document, Types } from 'mongoose';
export type UserQuestionDocument = UserQuestion & Document;
export declare class UserQuestion {
    clerkUserId: string;
    name: string;
    email: string;
    age: number;
    course: Types.ObjectId;
}
export declare const UserQuestionSchema: import("mongoose").Schema<UserQuestion, import("mongoose").Model<UserQuestion, any, any, any, (Document<unknown, any, UserQuestion, any, import("mongoose").DefaultSchemaOptions> & UserQuestion & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, UserQuestion, any, import("mongoose").DefaultSchemaOptions> & UserQuestion & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, UserQuestion>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserQuestion, Document<unknown, {}, UserQuestion, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<UserQuestion & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    clerkUserId?: import("mongoose").SchemaDefinitionProperty<string, UserQuestion, Document<unknown, {}, UserQuestion, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<UserQuestion & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    name?: import("mongoose").SchemaDefinitionProperty<string, UserQuestion, Document<unknown, {}, UserQuestion, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<UserQuestion & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, UserQuestion, Document<unknown, {}, UserQuestion, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<UserQuestion & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    age?: import("mongoose").SchemaDefinitionProperty<number, UserQuestion, Document<unknown, {}, UserQuestion, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<UserQuestion & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    course?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, UserQuestion, Document<unknown, {}, UserQuestion, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<UserQuestion & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, UserQuestion>;
