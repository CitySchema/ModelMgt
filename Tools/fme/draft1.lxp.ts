var fieldInfos = []

if (!IsEmpty (Trim($feature.ProjectLnk))) {
    Push (fieldInfos, {fieldName: 'ProjectLnk', label: 'Component'})
};

if (!IsEmpty (Trim($feature.Model_Cred))) {
    Push (fieldInfos, {fieldName: 'Model_Cred', label: 'Component'})
};

if (!IsEmpty (Trim($feature.GoogleLnk))) {
    Push (fieldInfos, {fieldName: '$feature.GoogleLnk', label: 'Component'})
};

if (!IsEmpty (Trim($feature.Model_Note))) {
    Push (fieldInfos, {fieldName: 'Model_Note', label: 'Component'})

};
return {
    type: 'fields',
    Status: $feature.Status,
    fieldInfos: fieldInfos,
    attributes: {
        'ProjectLnk': $feature.ProjectLnk,
        'Model_Cred': $feature.Model_Cred,
        'Model_Note': $feature.Model_Note
    }
}