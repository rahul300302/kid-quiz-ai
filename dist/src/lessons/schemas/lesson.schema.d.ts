import { Document, Types } from 'mongoose';
export type LessonDocument = Lesson & Document;
export declare class Lesson {
    title: string;
    description: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    uploadedBy: Types.ObjectId;
}
export declare const LessonSchema: import("mongoose").Schema<Lesson, import("mongoose").Model<Lesson, any, any, any, (Document<unknown, any, Lesson, any, import("mongoose").DefaultSchemaOptions> & Lesson & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Lesson, any, import("mongoose").DefaultSchemaOptions> & Lesson & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, Lesson>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Lesson, Document<unknown, {}, Lesson, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Lesson & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Lesson, Document<unknown, {}, Lesson, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Lesson & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Lesson, Document<unknown, {}, Lesson, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Lesson & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fileName?: import("mongoose").SchemaDefinitionProperty<string, Lesson, Document<unknown, {}, Lesson, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Lesson & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fileUrl?: import("mongoose").SchemaDefinitionProperty<string, Lesson, Document<unknown, {}, Lesson, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Lesson & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    fileType?: import("mongoose").SchemaDefinitionProperty<string, Lesson, Document<unknown, {}, Lesson, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Lesson & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    uploadedBy?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Lesson, Document<unknown, {}, Lesson, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Lesson & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Lesson>;
