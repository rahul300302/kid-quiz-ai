import { Document, Types } from 'mongoose';
export type PerformanceMetricsDocument = PerformanceMetrics & Document;
export declare class PerformanceMetrics {
    studentId: Types.ObjectId;
    testId: Types.ObjectId;
    averageBasicScore: number;
    averageAiScore: number;
    totalAttempts: number;
    improvementRate: number;
    consistencyScore: number;
    averageHintUsage: number;
    averageLearningEngagement: number;
    averageTimeEfficiency: number;
    strongTopics: string[];
    weakTopics: string[];
    calculatedAt: Date;
}
export declare const PerformanceMetricsSchema: import("mongoose").Schema<PerformanceMetrics, import("mongoose").Model<PerformanceMetrics, any, any, any, (Document<unknown, any, PerformanceMetrics, any, import("mongoose").DefaultSchemaOptions> & PerformanceMetrics & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, PerformanceMetrics, any, import("mongoose").DefaultSchemaOptions> & PerformanceMetrics & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, PerformanceMetrics>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    studentId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    testId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    averageBasicScore?: import("mongoose").SchemaDefinitionProperty<number, PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    averageAiScore?: import("mongoose").SchemaDefinitionProperty<number, PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    totalAttempts?: import("mongoose").SchemaDefinitionProperty<number, PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    improvementRate?: import("mongoose").SchemaDefinitionProperty<number, PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    consistencyScore?: import("mongoose").SchemaDefinitionProperty<number, PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    averageHintUsage?: import("mongoose").SchemaDefinitionProperty<number, PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    averageLearningEngagement?: import("mongoose").SchemaDefinitionProperty<number, PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    averageTimeEfficiency?: import("mongoose").SchemaDefinitionProperty<number, PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    strongTopics?: import("mongoose").SchemaDefinitionProperty<string[], PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    weakTopics?: import("mongoose").SchemaDefinitionProperty<string[], PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    calculatedAt?: import("mongoose").SchemaDefinitionProperty<Date, PerformanceMetrics, Document<unknown, {}, PerformanceMetrics, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<PerformanceMetrics & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, PerformanceMetrics>;
