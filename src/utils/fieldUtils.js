import { bitable, FieldType } from '@lark-base-open/js-sdk';



// --001== 获取所勾选字段的字段Id
export const getSelectedFieldsId = (fieldList, checkedFields, t) => {
    const mappedFields = {};
    for (let field of checkedFields) {
        // 查找与checkedFields相匹配的fieldListSeView项目
        const foundField = fieldList.find(f => f.name === t(`selectGroup.videoInfo.${field}`));

        if (field.endsWith('Count') && foundField && foundField.type !== 2)
            return ` [${t(`selectGroup.videoInfo.${field}`)}] ${t(`checks.number`)}`
        else if ( field.endsWith('Link') && foundField && foundField.type !== 15)
            return ` [${t(`selectGroup.videoInfo.${field}`)}] ${t(`checks.url`)}`
        else if ((field == t('selectGroup.videoInfo.uploader') || field == t('selectGroup.videoInfo.content') || field == t('selectGroup.videoInfo.tags') || field == t('selectGroup.videoInfo.link') || field == t('selectGroup.videoInfo.ipLocation') || field == t('selectGroup.videoInfo.type') || field == t('selectGroup.videoInfo.userDesc') || field == t('selectGroup.videoInfo.userGender') || field == t('selectGroup.videoInfo.userIpLocation') || field == t('selectGroup.videoInfo.userRedID') || field == t('selectGroup.videoInfo.userUserId')) && foundField && foundField.type !== 1)
            return ` [${t(`selectGroup.videoInfo.${field}`)}] ${t(`checks.text`)}`
        else if (field == t('selectGroup.videoInfo.releaseTime') && foundField && foundField.type !== 5)
            return ` [${t(`selectGroup.videoInfo.${field}`)}] ${t(`checks.datetime`)}`
        else if (field == t('selectGroup.videoInfo.lastUpdateTime') && foundField && foundField.type !== 5)
            return ` [${t(`selectGroup.videoInfo.${field}`)}] ${t(`checks.datetime`)}`


        // 如果找到了相应的项目，就使用其id，否则设置为-1
        mappedFields[field] = foundField ? foundField.id : -1;
    }



    return mappedFields;
}



// --003== 创建 mappedFieldIds 中 value 为 -1 的字段
/**
 * 命令式，改变mappedFieldIds.value的状态
 * @param {param} mappedFieldIds 现有的映射字段ids
 * @param {param} table 当前要处理的table
 */
export const createFields = async (mappedFieldIds, cur_table, t) => {
    console.log(mappedFieldIds)
    if (mappedFieldIds["errorTip"] === -1)
        mappedFieldIds["errorTip"] = await cur_table.addField({
            type: FieldType.Text,
            name: t(`selectGroup.videoInfo.errorTip`),
        })


    for (let key in mappedFieldIds) {
        if (mappedFieldIds[key] === -1) {
            switch (key) {
                case "imageList":
                    mappedFieldIds[key] = await cur_table.addField({
                        type: FieldType.Attachment,
                        name: t(`selectGroup.videoInfo.${key}`),
                    })
                    break;
                    
                case "title":  // 笔记名称
                case "content":
                case "type":
                case "tags":
                case "link":  // 链接
                case "ipLocation":
                    
                case "uploader":
                case "userDesc":
                case "userGender":
                case "userIpLocation":
                case "userRedID":
                case "userUserId":
                    mappedFieldIds[key] = await cur_table.addField({
                        type: FieldType.Text,
                        name: t(`selectGroup.videoInfo.${key}`),
                    })
                    break;
                    
                case "userHomeLink":
                    mappedFieldIds[key] = await cur_table.addField({
                        type: FieldType.Url,
                        name: t(`selectGroup.videoInfo.${key}`),
                    })
                    break;
                
               


                case "viewCount":
                case "collectionCount":
                case "likeCount":
                case "commentCount":  // 评论量
                case "shareCount":
                case "totalInterCount":  // 总互动量
                case "userFansCount":
                case "userFollowCount":
                case "userLikeAndCollectCount":

                    mappedFieldIds[key] = await cur_table.addField({
                        type: FieldType.Number,
                        name: t(`selectGroup.videoInfo.${key}`),
                    })
                    break;
                
                case "releaseTime":
                case "lastUpdateTime":
                case "fetchDataTime":
                    mappedFieldIds[key] = await cur_table.addField({
                        type: FieldType.DateTime,
                        name: t(`selectGroup.videoInfo.${key}`),
                    })
                    break;
            }
        }


    }

    return mappedFieldIds
}
