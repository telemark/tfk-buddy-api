SELECT
  o.Firstname as firstName,
  o.Midlename as middleName,
  o.Lastname as lastName,
  o.DisplayName as fullName,
  o.SSN as personalIdNumber,
  m.StringValue as userName
FROM
  dbMetakatalog.dbo.tblMultiValue m,
  dbMetakatalog.dbo.tblObjects o
WHERE
  m.StringValue = o.ID
  AND
  m.ID = '@id'
  AND
  m.AttributeName = 'Member'
  AND
  o.DisplayName LIKE '%@search%'
